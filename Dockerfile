FROM nginx:1.19.0-alpine
COPY /build/dist.zip /usr/share/nginx/html
COPY nginx_conf /etc/nginx
WORKDIR /usr/share/nginx/html
RUN unzip /usr/share/nginx/html/dist.zip -d /usr/share/nginx/html
RUN rm -f /usr/share/nginx/html/dist.zip