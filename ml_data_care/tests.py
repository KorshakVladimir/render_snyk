import pytest
import ujson
from company_management.models import Company
from . models import MLData
from rest_framework.test import APIClient
from contextlib import contextmanager
import os
import csv


@pytest.fixture
def api():
    return APIClient()


@contextmanager
def generate_csv():
    with open('temp.csv', 'w', newline='') as csvfile:
        spamwriter = csv.writer(csvfile, dialect='excel')
        spamwriter.writerow(['cust_ID', 'owner_first_name'])
        spamwriter.writerow(['1', 'qw'])
        spamwriter.writerow(['2', 'qw1'])
        spamwriter.writerow(['3', 'qw2'])
    try:
        yield
    finally:
        os.remove('temp.csv')


@contextmanager
def generate_csv_2():
    with open('temp1.csv', 'w', newline='') as csvfile:
        spamwriter = csv.writer(csvfile, dialect='excel')
        spamwriter.writerow(['cust_ID', 'owner_first_name'])
        spamwriter.writerow(['1', 'qe'])
        spamwriter.writerow(['2', 'qe1'])
        spamwriter.writerow(['3', 'qe2'])
    try:
        yield
    finally:
        os.remove('temp1.csv')


def create_ml_data(api):
    com_instance = Company.objects.create(name="test1")
    with generate_csv():
        with open('temp.csv') as fp:
            response = api.post('/api/ml_data/data_set/%d/' % 0, {"company": com_instance.id,
                                                                  "file": fp, "name": "test1"})
    return response


@pytest.mark.django_db
def test_all_data_sets(api):
    com_instance_1 = Company.objects.create(name="test1")
    MLData.objects.create(name="test1", company=com_instance_1)
    MLData.objects.create(name="test2", company=com_instance_1)
    com_instance_2 = Company.objects.create(name="test2")
    MLData.objects.create(name="test1", company=com_instance_2)
    MLData.objects.create(name="test2", company=com_instance_2)
    request = api.get('/api/ml_data/all_data_sets/', )

    assert 200 == request.status_code

    body = ujson.loads(request.content)
    assert 2 == len(body)
    assert body[0] == {'label': 'test1', 'data': com_instance_1.id, 'children': [{'label': 'test1', 'data': 1},
                                                                 {'label': 'test2', 'data': 2}]
                       }
    assert body[1] == {'label': 'test2', 'data': com_instance_2.id, 'children': [{'label': 'test1', 'data': 3},
                                                                 {'label': 'test2', 'data': 4}]
                       }


@pytest.mark.django_db
def test_data_set_get(api):
    com_instance = Company.objects.create(name="test1")
    data_instance = MLData.objects.create(name="test1", company=com_instance)
    request = api.get('/api/ml_data/data_set/%d/' % data_instance.id)
    assert 200 == request.status_code
    assert ujson.loads(request.content) == {'id': 5, 'name': 'test1', 'company': {'id': com_instance.id, 'name': 'test1'},
                                            'key_data': {'name': ''}, 'data': None}


@pytest.mark.django_db
def test_data_set_post(api):
    request = create_ml_data(api)
    assert 200 == request.status_code
    data = request.json()
    ml_instance = MLData.objects.get(name="test1")
    assert ml_instance.id == data["id"]


@pytest.mark.django_db
def test_data_set_put(api):
    com_instance = Company.objects.create(name="test1")
    data_instance = MLData.objects.create(name="test1", company=com_instance)
    with generate_csv():
        with open('temp.csv') as fp:
            request = api.put('/api/ml_data/data_set/%d/' % data_instance.id, {"company": com_instance.id,
                                                                               "file": fp, "name": "test1"})
    assert 200 == request.status_code
    data = request.json()
    assert data_instance.id == data["id"]


@pytest.mark.django_db
def test_data_set_delete(api):
    com_instance = Company.objects.create(name="test1")
    data_instance = MLData.objects.create(name="test1", company=com_instance)
    request = api.delete('/api/ml_data/data_set/%d/' % data_instance.id)
    assert 200 == request.status_code
    assert 0 == len(MLData.objects.filter(name="test1"))


@pytest.mark.django_db
def test_data_set_row(api):
    create_ml_data(api)
    ml_instance = MLData.objects.get(name="test1")
    request = api.put('/api/ml_data/data_set_row/%d/' % ml_instance.id, {"row_index": 1,
                                                                         "col_name": "owner_first_name",
                                                                         "value": 2})
    assert 200 == request.status_code
    ml_instance = MLData.objects.get(name="test1")
    ml_data = ml_instance.data
    for i in ml_data:
        if i["row_index"] == 1:
            assert i["owner_first_name"] == '2'
        if i["row_index"] == 2:
            assert i["owner_first_name"] != '2'


@pytest.mark.django_db
def test_map_new_data_set(api):
    create_ml_data(api)
    mapped_columns = ujson.dumps([{"origin_column": "owner_first_name", "new_set_column": "owner_first_name"}])
    primary_mapping = ujson.dumps({"origin_column": "cust_ID", "new_set_column": "cust_ID"})
    origin_column = ujson.dumps(["cust_ID", "owner_first_name"])
    new_set_column = ujson.dumps(["cust_ID", "owner_first_name"])
    context = {
        "mapped_columns": mapped_columns,
        "primary_columns": primary_mapping,
        "origin_column": origin_column,
        "new_set_column": new_set_column
    }
    ml_instance = MLData.objects.get(name="test1")
    with generate_csv_2():
        with open('temp1.csv') as fp:
            context["file"] = fp
            request = api.post('/api/ml_data/map_new_data_set/%d/' % ml_instance.id, context)

    assert 200 == request.status_code

    ml_instance = MLData.objects.get(name="test1")
    ml_data = ml_instance.data
    for i in ml_data:
        if i["row_index"] == 1:
            assert i["owner_first_name"] == 'qe'
        if i["row_index"] == 2:
            assert i["owner_first_name"] == 'qe1'
        if i["row_index"] == 3:
            assert i["owner_first_name"] == 'qe2'
