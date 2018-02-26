import csv

import sys
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, HttpResponseBadRequest

from django.views import View
from django.conf import settings
from . models import MLData
import ujson

from helpers.responce import HttpJson


class LoadFileView(View):

    @staticmethod
    def _save_row(first_row, row):
        data = dict(zip(first_row, row))
        customer_id = data["cust_ID"]
        MLData.objects.update_or_create(customer_id=customer_id, data=data)
        return data

    def post(self, request):
        myfile = request.FILES['file']
        fs = FileSystemStorage()
        filename = fs.save(myfile.name, myfile)
        relative_path = settings.MEDIA_ROOT + '/' + filename
        try:

            with open(relative_path, newline='') as csvfile:
                filereader = csv.reader(csvfile, dialect='excel')
                first_row = next(filereader)
                first_row[0] = "cust_ID"
                res = [self._save_row(first_row, row) for row in filereader]
        except Exception:
            return HttpResponseBadRequest("Error: %s" % sys.exc_info()[1])
        finally:
            fs.delete(relative_path)
        return HttpJson(ujson.dumps(res))


class MLDataView(View):

    @staticmethod
    def get(request):
        res = list(MLData.objects.values_list("data", flat=True))
        return HttpJson(ujson.dumps(res, indent=4))

    def post(self, request):
        data = request.POST.get("data")
        data_dict = ujson.loads(data)
        try:
            new_row = MLData.objects.create(customer_id=data_dict["cust_ID"], data=data_dict)
            new_row.save()
            return HttpJson(ujson.dumps(["ok"]))
        except Exception:
            return HttpResponseBadRequest("Cann`t save the data: %s" % sys.exc_info()[1])


class MLDataRowView(View):

    def get(self, request, cust_id):
        res = list(MLData.objects.filter(customer_id=cust_id))
        if len(res):
            data = res[0].data
            return HttpJson(ujson.dumps(data, indent=4))
        else:
            return HttpJson(ujson.dumps(['row %d not found' % cust_id]))

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
                return HttpResponse(parsed_data, content_type="text/json")
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
