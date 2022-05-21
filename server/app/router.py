from fastapi import APIRouter
from db import data_loader
import pandas as pd

router = APIRouter(
    responses={404: {"description": "Not Found"}}
)

cabs_df = data_loader.load_cabs()
maintenances_df = data_loader.load_maintenances()
services_df = data_loader.load_services()

maintenances_with_services_df = pd.merge(
    services_df,
    maintenances_df,
    how='left',
    left_on=['id'],
    right_on=['id_servicio']
)


@router.get('/monthly_income')
def get_monthly_income():
    return maintenances_with_services_df.groupby(['category_service'])['unit_cost'].sum().to_dict()


@router.get('/monthly_services')
def get_monthly_services():
    return maintenances_with_services_df.groupby(['service_name']).size().to_dict()


@router.get('/expensive_services')
def get_most_expensive_services():
    temp_df = services_df.copy()
    temp_df.sort_values(by='unit_cost', ascending=False, inplace=True)
    return temp_df.to_dict('records')
