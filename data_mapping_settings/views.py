import ujson

from django.views import View
from django.http import HttpResponseBadRequest

from data_mapping_settings.models import MapSettings
from helpers.responce import HttpJson

from . forms import DataMappingForm


class DataMappingSettings(View):
    @staticmethod
    def get(request):
        data = [{"name": x[0], "data": x[1], "primary_columns": x[2]}
                for x in MapSettings.objects.values_list("name", "data", "primary_columns")]
        return HttpJson(ujson.dumps(data))

    @staticmethod
    def post(request):
        data = request.POST
        form = DataMappingForm(data)
        if form.is_valid():
            data_mapping = form.save(commit=False)
            data_mapping.data = ujson.loads(data["data"])
            data_mapping.primary_columns = ujson.loads(data["primary_columns"])
            data_mapping.save()
        else:
            return HttpResponseBadRequest(form.errors.as_json())
        return HttpJson(ujson.dumps({
                 "name": data_mapping.name,
                 "data": data_mapping.data,
                 "primary_columns": data_mapping.primary_columns
                 })
               )
