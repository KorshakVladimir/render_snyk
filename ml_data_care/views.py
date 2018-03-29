import csv
import sys

from django.core.files.storage import FileSystemStorage
from django.http import HttpResponseBadRequest
from django.views import View
from django.conf import settings
from .models import MLData
from . forms import NewDataSetForm

from company_management.models import Company

import ujson

from helpers.responce import HttpJson


def csv_to_json(file):
    def _remove_bad_preposition(row):
        str_row = ujson.dumps(row)
        if str_row[2:8] == '\\ufeff':
            str_row = str_row[0:2] + str_row[8:]
        return ujson.loads(str_row)
    fs = FileSystemStorage()
    filename = fs.save(file.name, file)
    relative_path = settings.MEDIA_ROOT + '/' + filename
    data_set_data = []
    try:
        with open(relative_path, newline='') as csvfile:
            file_reader = csv.reader(csvfile, dialect='excel')
            first_row = _remove_bad_preposition(next(file_reader))
            row_index = 1
            for row in file_reader:
                data_dict = dict(zip(first_row, row))
                data_dict["row_index"] = row_index
                data_set_data.append(data_dict)
                row_index += 1
    except Exception:
        return data_set_data
    finally:
        fs.delete(relative_path)
    return data_set_data


class MLDataView(View):

    @staticmethod
    def get(request):
        res = []
        data_sets = list(MLData.objects.values_list("company_id", "name", "id"))
        companies = Company.objects.values_list("name", "id").order_by("name")

        tree = {x[1]: {"name": x[0], "children": []} for x in companies}

        for data_set in data_sets:
            company_id = data_set[0]
            ds_name = data_set[1]
            id_data_set = data_set[2]
            tree[company_id]["children"].append({
                "label": ds_name,
                "data": id_data_set,
            })

        for tree_key, value in tree.items():
            res.append({
                "label": value["name"],
                "data": tree_key,
                "children": value["children"]
            })
        return HttpJson(ujson.dumps(res))


class MLDataSetView(View):

    def get(self, request, pk):
        context = {}
        try:
            # todo: rewrite for one query
            ml_data = MLData.objects.get(id=pk)
        except Exception:
            return HttpResponseBadRequest(ujson.dumps(['Data set with `pk` %d not found' % pk]))
        context["id"] = ml_data.id
        context["name"] = ml_data.name
        context["company"] = {"id": ml_data.company_id, "name": ml_data.company.name}
        context["key_data"] = {"name": ml_data.key_data}
        context["data"] = ml_data.data
        return HttpJson(ujson.dumps(context))

    @staticmethod
    def _create_update_data_set(file, req_data, pk=0):

        if pk:
            try:
                instance = MLData.objects.get(pk=pk)
                data_set = NewDataSetForm(req_data, instance=instance)
            except Exception:
                return HttpResponseBadRequest(ujson.dumps(['Data set with `pk` %d not found' % pk]))
        else:
            data_set = NewDataSetForm(req_data)

        if not data_set.is_valid():
            return HttpResponseBadRequest(data_set.errors.as_json())
        ml_data = data_set.save(commit=False)
        if file:
            ml_data.data = csv_to_json(file)
        ml_data.save()
        return HttpJson(ujson.dumps({"data": ml_data.data, "id": ml_data.id}))

    def post(self, request, pk):
        file = request.FILES.get('file', '')
        return self._create_update_data_set(file=file, req_data=request.POST)

    def put(self, request, pk):
        file = request.FILES.get('file', '',)
        return self._create_update_data_set(file=file, req_data=request.PUT, pk=pk)

    def delete(self, request, pk):
        MLData.objects.filter(pk=pk).delete()
        return HttpJson(ujson.dumps(["ok"]))


class MLDataSetRowView(View):
    def put(self, request, pk):
        data = request.PUT
        try:
            instance = MLData.objects.get(pk=pk)
        except Exception:
            return HttpResponseBadRequest(ujson.dumps(['Data set with `pk` %d not found' % pk]))
        row_index = int(data["row_index"])
        for x in instance.data:
            if x["row_index"] == row_index:
                x[data['col_name']] = data['value']
        instance.save()
        return HttpJson(ujson.dumps(["ok"]))


class MLDataMapping(View):

    def post(self, request, pk):
        try:
            instance = MLData.objects.get(pk=pk)
        except Exception:
            return HttpResponseBadRequest(ujson.dumps(['Data set with `pk` %d not found' % pk]))
        mapped_columns = ujson.loads(request.POST["mapped_columns"])
        primary_mapping = ujson.loads(request.POST["primary_columns"])
        origin_column = primary_mapping['origin_column']
        new_set_column = primary_mapping['new_set_column']
        file = request.FILES.get('file', '')
        new_data_set = csv_to_json(file)
        new_data_set_dict = {}
        for x in new_data_set:
            if new_set_column not in x:
                return HttpResponseBadRequest(
                    ujson.dumps(['In new row %s  column %s was not found' % (x, new_set_column)]))
            new_data_set_dict[x[new_set_column]] = x

        origin_data_set = instance.data
        key_data = instance.key_data
        for row in origin_data_set:
            if origin_column not in row:
                return HttpResponseBadRequest(ujson.dumps(['In row %s  column %s was not found' % (row, origin_column)]))
            pk = row[origin_column]
            if pk in new_data_set_dict:
                new_data_set_row = new_data_set_dict[pk]
                for columns in mapped_columns:
                    if columns['origin_column'] == key_data:
                        continue
                    if columns['origin_column'] not in row:
                        return HttpResponseBadRequest(
                            ujson.dumps(['In row %s  column %s was not found' % (row, columns['origin_column'])]))
                    if columns['new_set_column'] not in new_data_set_row:
                        return HttpResponseBadRequest(
                            ujson.dumps(['In new row %s  column %s was not found' % (new_data_set_row,
                                         columns['new_set_column'])]))
                    row[columns['origin_column']] = new_data_set_row[columns['new_set_column']]

        instance.data = origin_data_set
        instance.save()
        return HttpJson(ujson.dumps(origin_data_set))
