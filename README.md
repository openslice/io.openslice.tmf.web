# io.openslice.tmf.web
This project is the web frontent UI of openslice implementation around the Service Delivery Framework. It consumes TMF Open APIs

When developing under src/assets/config copy config.prod.default.json to config.dev.json to point to you API and Keycloak servers. Non-static URLs are also supported. If {BASEURL} is detected in any of file's properties, it is replaced by the current browser URL origin (protocol + hostname + port), as defined during application bootstrap.

Also under src/assets/config copy config.theming.default.json to config.theming.json to customise your deployment, in terms of theming, branding, and specific HTML sections.
Available values:
* THEME_ID: "theme1", "theme2", "theme3"
* Logo/Icon paths support both project's relative paths and absolute URLs

Execute:

ng serve --port 8888

open your browser on http://localhost:8888
