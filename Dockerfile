FROM nginx:1.19.0-alpine
COPY /build/dist.zip /usr/share/nginx/html
COPY nginx_conf /etc/nginx
VOLUME /usr/share/nginx/html
VOLUME /etc/nginx
WORKDIR /usr/share/nginx/html
RUN unzip dist.zip /usr/share/nginx/html
RUN rm -f /usr/share/nginx/html/dist.zip