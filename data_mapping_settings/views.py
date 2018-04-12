import ujson

from django.views import View
from django.http import HttpResponseBadRequest

from data_mapping_settings.models import MapSettings
from helpers.responce import HttpJson

from . forms import DataMappingForm


class DataMappingBase(View):
    def save_form(self, form, data):
        if form.is_valid():
            data_mapping = form.save(commit=False)
            data_mapping.data = ujson.loads(data["data"])
            data_mapping.primary_columns = ujson.loads(data["primary_columns"])
            data_mapping.save()
        else:
            return HttpResponseBadRequest(form.errors.as_json())
        return HttpJson(ujson.dumps({
                 "id": data_mapping.id,
                 "name": data_mapping.name,
                 "data": data_mapping.data,
                 "primary_columns": data_mapping.primary_columns
                 })
               )


class DataMappingSettings(DataMappingBase):
    @staticmethod
    def get(request):
        data = [{"name": x[0], "data": x[1], "primary_columns": x[2], "id": x[3]}
                for x in MapSettings.objects.values_list("name", "data", "primary_columns", "id")]
        return HttpJson(ujson.dumps(data))

    def post(self, request):
        data = request.POST
        form = DataMappingForm(data)
        return self.save_form(form, data)


class DataMappingDetailSettings(DataMappingBase):
    def put(self, request, pk):
        instance = MapSettings.objects.get(pk=pk)
        data = request.PUT
        form = DataMappingForm(data, instance=instance)
        return self.save_form(form, data)

    def delete(self, request, pk):
        MapSettings.objects.filter(pk=pk).delete()
        return HttpJson(ujson.dumps(["ok"]))

