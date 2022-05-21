FROM python:3.10-slim

WORKDIR /app

RUN python -m pip install --upgrade pip

RUN python -m pip install pdm

COPY pyproject.toml pdm.lock /app/

RUN pdm install

COPY . /app/

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

EXPOSE 8000

CMD [ "pdm","run","start" ]