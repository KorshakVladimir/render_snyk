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


class CreateDataSet(View):
    @staticmethod
    def post(request):
        myfile = request.FILES.get('file', '')
        post_data = request.POST
        data_set = NewDataSetForm(post_data)
        if not data_set.is_valid():
            return HttpResponseBadRequest(data_set.errors.as_json())
        ml_data = data_set.save()
        if myfile:
            fs = FileSystemStorage()
            filename = fs.save(myfile.name, myfile)
            relative_path = settings.MEDIA_ROOT + '/' + filename
            try:
                with open(relative_path, newline='') as csvfile:
                    file_reader = csv.reader(csvfile, dialect='excel')
                    first_row = next(file_reader)
                    data_set = [dict(zip(first_row, row)) for row in file_reader]
                    ml_data.data = data_set
                    ml_data.save()
            except Exception:
                return HttpResponseBadRequest(ujson.dumps({'file_to_load': sys.exc_info()[1]}))
            finally:
                fs.delete(relative_path)
        return HttpJson(ujson.dumps({"id": ml_data.id}))


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
        try:
            res = MLData.objects.get(id=pk)
            data = res.data
            return HttpJson(ujson.dumps(data))
        except Exception:
            return HttpJson(ujson.dumps(['Data set with `pk` %d not found' % pk]))

    def post(self, request, cust_id):
        res = list(MLData.objects.filter(customer_id=cust_id))
        if len(res):
            try:
                curr_data = res[0]
                data = request.POST.get("data")
                parsed_data = "".join(data.split("\r\n   "))
                data_as_object = ujson.loads(parsed_data)
                if "cust_ID" not in data_as_object:
                    return HttpResponseBadRequest("cust_ID is required key")
                elif int(data_as_object["cust_ID"]) != cust_id:
                    return HttpResponseBadRequest("cust_ID must much to id in URL")
                curr_data.data = data_as_object
                curr_data.save()
                return HttpJson(parsed_data)
            except ValueError:
                return HttpResponseBadRequest("Not valid json: %s" % sys.exc_info()[1])
        else:
            return HttpJson(ujson.dumps(['row %d not found' % cust_id]))

    def delete(self, request, cust_id):
        MLData.objects.filter(customer_id=cust_id).delete()
        return HttpJson(ujson.dumps(["ok"]))


class MLDataCSVView(View):

    def post(self, request, cust_id):
        res = list(MLData.objects.filter(customer_id=cust_id))
        if len(res):
            data = res[0].data
            response = HttpResponse(content_type='text/json')
            response['Content-Disposition'] = 'attachment; filename = "somefilename.csv"'
            fieldnames = data.keys()

            writer = csv.DictWriter(response, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow(data)
            return response
        else:
            return HttpJson(ujson.dumps(['row %d not found' % cust_id]))
