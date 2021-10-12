# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
#build is already performed outside docker file


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.19.4
#Copy ci-dashboard-dist
COPY ./dist/io-openslice-portal-web/ /usr/share/nginx/html/services
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
