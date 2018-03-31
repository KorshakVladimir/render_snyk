import pytest


@pytest.mark.django_db
def test_something(client):
    assert 'Success!' == client.get('/api/company_management/company_names/').content
