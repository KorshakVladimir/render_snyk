import ujson

import sys
from django.http import HttpResponseBadRequest
from django.views import View

from company_management.models import Company
from helpers.responce import HttpJson


class CompanyView(View):
    @staticmethod
    def get(request):
        current_company = Company.objects.filter(pk=pk)
        if not current_company:
            return HttpResponseBadRequest("Company with id: %d  not found" % pk)
        return HttpJson(ujson.dumps({"name": current_company.name}))

    @staticmethod
    def post(request):
        data = request.POST
        try:
            current_company = Company.objects.create(name=data["name"])
        except Exception:
            return HttpResponseBadRequest("Error: %s" % sys.exc_info()[1])

        return HttpJson(ujson.dumps({"name": current_company.name}))

    @staticmethod
    def put(request, pk):
        try:
            current_company = Company.objects.filter(pk=pk)
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