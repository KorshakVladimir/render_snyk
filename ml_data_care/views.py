import csv

import sys
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, HttpResponseBadRequest

from django.views import View
from django.conf import settings
from . models import MLData
from . forms import NewDataSetForm

import ujson

from helpers.responce import HttpJson


class MLDataView(View):

    @staticmethod
    def get(request):
        res = []
        data_sets = list(MLData.objects.values_list("company__name", "name", "id"))
        tree = {}
        for data_set in data_sets:
            company = data_set[0]
            ds_name = data_set[1]
            id = data_set[2]
            if company in tree:
                tree[company].append({
                    "label": ds_name,
                    "data": id,
                })
            else:
                tree[company] = [{
                    "label": ds_name,
                    "data": id,
                }]

        for tree_key, value in tree.items():
            res.append({
                "label": tree_key,
                "data": tree_key,
                "children": value
            })
        return HttpJson(ujson.dumps(res))

    def post(self, request):
        data = request.POST.get("data")
        data_dict = ujson.loads(data)
        try:
            new_row = MLData.objects.create(customer_id=data_dict["cust_ID"], data=data_dict)
            new_row.save()
            return HttpJson(ujson.dumps(["ok"]))
        except Exception:
            return HttpResponseBadRequest("Cann`t save the data: %s" % sys.exc_info()[1])


class MLDataSetView(View):

    def get(self, request, pk):
        context = {}
        try:
            # todo: rewrite for one query
            ml_data = MLData.objects.get(id=pk)
            context["name"] = ml_data.name
            context["company"] = {"id": ml_data.company_id, "name": ml_data.company.name}
            context["data"] = ml_data.data
            return HttpJson(ujson.dumps(context))
        except Exception:
            return HttpResponseBadRequest(ujson.dumps(['Data set with `pk` %d not found' % pk]))

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
        ml_data = data_set.save()
        if file:
            fs = FileSystemStorage()
            filename = fs.save(file.name, file)
            relative_path = settings.MEDIA_ROOT + '/' + filename
            try:
                with open(relative_path, newline='') as csvfile:
                    file_reader = csv.reader(csvfile, dialect='excel')
                    first_row = next(file_reader)
                    row_index = 1
                    data_set_data = []
                    for row in file_reader:
                        data_dict = dict(zip(first_row, row))
                        data_dict["row_index"] = row_index
                        data_set_data.append(data_dict)
                        row_index += 1
                    ml_data.data = data_set_data
                    ml_data.save()
            except Exception:
                return HttpResponseBadRequest(ujson.dumps({'file_to_load': sys.exc_info()[1]}))
            finally:
                fs.delete(relative_path)
        return HttpJson(ujson.dumps({"data": ml_data.data, "id": ml_data.id}))

    def post(self, request, pk):
        file = request.FILES.get('file', '')
        return self._create_update_data_set(file=file, req_data=request.POST)

    def put(self, request, pk):
        file = request.FILES.get('file', '',)
        return self._create_update_data_set(file=file, req_data=request.PUT, pk=pk)

    def delete(self, request, cust_id):
        MLData.objects.filter(customer_id=cust_id).delete()
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
