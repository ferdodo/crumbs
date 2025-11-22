FROM crumbs-design-system
FROM node
WORKDIR /crumbs/design-system
COPY --from=0 /crumbs/design-system/dist dist
COPY --from=0 /crumbs/design-system/package.json .
ENTRYPOINT ["/bin/bash"]