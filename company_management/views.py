import ujson

import sys
from django.http import HttpResponseBadRequest
from django.views import View

from company_management.models import Company
from helpers.responce import HttpJson
from . forms import NewCompanyForm


class CompanyView(View):
    @staticmethod
    def get(request, pk):
        current_company = Company.objects.filter(pk=pk)
        if not len(current_company):
            return HttpResponseBadRequest("Company with id: %d  not found" % pk)
        return HttpJson(ujson.dumps({"name": current_company[0].name, "id": current_company[0].id}))

    @staticmethod
    def post(request):
        data = request.POST
        form = NewCompanyForm(data)
        if form.is_valid():
            current_company = form.save()
        else:
            return HttpResponseBadRequest(form.errors.as_json())
        return HttpJson(ujson.dumps({"name": current_company.name}))

    @staticmethod
    def put(request, pk):
        try:
            current_company = Company.objects.get(pk=pk)
            current_company.name = request.PUT["name"]
            current_company.save()
        except Exception:
            return HttpResponseBadRequest("Error: %s" % sys.exc_info()[1])

        return HttpJson(ujson.dumps({"name": current_company.name}))

    @staticmethod
    def delete(request, pk):
        Company.objects.filter(pk=pk).delete()
        return HttpJson(ujson.dumps(["ok"]))


class CompanyNamesView(View):
    @staticmethod
    def get(request):
        companies = Company.objects.all()
        return HttpJson(ujson.dumps([{"name": x.name, "id": x.id} for x in companies]))
