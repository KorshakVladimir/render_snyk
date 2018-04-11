import pytest
import ujson
from rest_framework.test import APIClient

from .models import MapSettings


@pytest.fixture
def api():
    return APIClient()


@pytest.mark.django_db
def test_data_mapping_settings_get(api):
    data = {
        "name": "Test1",
        "data": ujson.dumps({"11": 2, "22": 2}),
        "primary_columns": ujson.dumps({"11": 2, "22": 2}),
    }
    MapSettings.objects.create(**data)
    data = {
        "name": "Test2",
        "data": ujson.dumps({"11": 2, "22": 2}),
        "primary_columns": ujson.dumps({"11": 2, "22": 2}),
    }
    MapSettings.objects.create(**data)

    request = api.get('/api/data_mapping/map_data_settings/')
    assert 200 == request.status_code


@pytest.mark.django_db
def test_data_mapping_settings_post(api):
    data = {
        "name": "Test2",
        "data": ujson.dumps({"11": 2, "22": 2}),
        "primary_columns": ujson.dumps({"11": 2, "22": 2}),
    }
    request = api.post('/api/data_mapping/map_data_settings/', data)
    assert 200 == request.status_code


@pytest.mark.django_db
def test_data_mapping_settings_put(api):
    data = {
        "name": "Test2",
        "data": ujson.dumps({"11": 2, "22": 2}),
        "primary_columns": ujson.dumps({"11": 2, "22": 2}),
    }
    instance = MapSettings.objects.create(**data)
    data = {
        "name": "Test3",
        "data": ujson.dumps({"11": 2, "22": 2}),
        "primary_columns": ujson.dumps({"11": 2, "22": 2}),
    }
    request = api.put('/api/data_mapping/map_data_settings/%d/' % instance.id, data)
    assert 200 == request.status_code