FROM crumbs-design-system
RUN npm run coverage
FROM nginx
COPY --from=0 /crumbs/design-system/reports/mutation/mutation.html /usr/share/nginx/html/index.html