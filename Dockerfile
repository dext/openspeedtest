FROM nginxinc/nginx-unprivileged:1.29-alpine3.23-slim

COPY nginx.conf /etc/nginx/nginx.conf
COPY downloading /usr/share/nginx/html/
COPY upload /usr/share/nginx/html/
COPY index.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 3000
