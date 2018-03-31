import pytest
import ujson
from .models import Company
from rest_framework.test import APIClient


@pytest.fixture
def api():
    return APIClient()


@pytest.mark.django_db
def test_create_company(api):
    request = api.post('/api/company_management/company/0/', {"name": "qwe"})
    assert 200 == request.status_code


@pytest.mark.django_db
def test_change_name(api):
    instance = Company.objects.create(name='qwe')
    request = api.put('/api/company_management/company/%d/' % instance.id, {"name": "qwe1"}, format='json')
    assert 200 == request.status_code
    assert "qwe1" == ujson.loads(request.content)["name"]


@pytest.mark.django_db
def test_get_company(api):
    instance = Company.objects.create(name='qwe')
    request = api.get('/api/company_management/company/%d/' % instance.id)
    assert 200 == request.status_code
    assert "qwe" == ujson.loads(request.content)["name"]


@pytest.mark.django_db
def test_delete_company(api):
    instance = Company.objects.create(name='qwe')
    request = api.delete('/api/company_management/company/%d/' % instance.id)
    assert 200 == request.status_code
    assert [] == list(Company.objects.all())
