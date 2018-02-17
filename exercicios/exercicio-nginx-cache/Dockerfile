FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /data/nginx/cache
ENTRYPOINT ["nginx", "-g", "daemon off"]
