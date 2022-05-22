# Prueba Técnica

## Caso

  En el Centro de Operaciones Option se tiene una flota de taxis de la zona de Melipilla dirigidos por Pedro Oliva en el cuál se desea gestionar los servicios entregados para cada auto. Para ello, el C.O. desea visualizar gráficas y contadores de nivel de servicios ofrecidos durante el mes.
  Para llevarlo a cabo, se le entregan 3 tablas en donde se encuentra Taxi, Mantenciones, Servicios. Donde tendrá que capturar la información necesario para que el C.O. pueda llevar un orden en sus servicios.

  Se debe considerar que cada uno de los costos que se muestran es por unidad.
  Las fechas van en el formato MM-DD-YYYY.

## Que esperamos recibir

Se debe crear un dashboard que contenga 3 métricas principales:

- Ingreso mensual: debe sumar total de `costos` asociado a cada mantención y agrupado por servicio(category_service).
- Cantidad de servicios por mes: debe contar cuantos `servicios` se han ingresado en el último mes.
- 10 servicios más costosos: debe mostrar los `servicios` más costosos.

Puedes visualizar el wireframe(mockup) de alto nivel en los archivos.

## Tecnologías a ocupar
   Se debe utilizar obligatoriamente Python(FastAPI), React(Javascript/Typescript) y lo demás a tu imaginación

## Despliegue
   Front/Back - Netlify/Github Pages/Vercel/Firebase/Heroku... etc

## Opcionales
   - Docker
   - Typescript
   - Unit test (básico)
   - Formatter

## Supuestos
   Puedes hacer cualquier supuesto, ¡pero debes detallarlo al momento de entregar la prueba!

### Modelo de datos

  - Flota de Taxi
    - Taxi
    - id
    - Modelo
    - Año
    - Marca
    - Kilometraje
    - Estanque de bencina
    - Estanque de aceite
    - Presión de neumáticos

  - Centro de Mantención Taxi
    - Historial de mantenciones
      - id
      - id_auto
      - id_servicio
      - fecha_servicio

  - Servicios
    - id
    - costo
    - nombre_servicio
    - Bencina
      - 93
      - 95
      - 97
      - Diésel
    - Aceite
      - 10W
      - 20W
      - 30W
    - Aire
      - PSI
    - Lavado
      - Tapiz
      - Exterior

GL&HF!
