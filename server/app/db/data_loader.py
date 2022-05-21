import pandas as pd


def load_cabs():
    return pd.read_json('app/db/Taxis.json')


def load_maintenances():
    return pd.read_json('app/db/Mantenciones.json')


def load_services():
    return pd.read_json('app/db/Servicios.json')
