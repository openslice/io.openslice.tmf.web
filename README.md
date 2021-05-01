# io.openslice.tmf.web
This project is the web frontent UI of openslice implementation around the Service Delivery Framework. It consumes TMF Open APIs

When developing under src/assets/config copy config.prod.default.json to config.dev.json to point to you API and Keycloak servers

Execute:

ng serve --port 8888 --base-href /services/

open your browser on http://localhost:8888/services