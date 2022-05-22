from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_get_monthly_income():
    response = client.get('/monthly_income')
    assert response.status_code == 200
    assert 'bencina' in response.json()


def test_most_expensive_services():
    response = client.get('/expensive_services')
    assert response.status_code == 200
    assert len(response.json()) == 10
