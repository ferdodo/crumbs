FROM node AS build
WORKDIR /crumbs/design-system
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit --audit-level=low
COPY . .
RUN npm run build

FROM node AS publish
WORKDIR /crumbs/design-system
COPY --from=0 /crumbs/design-system/dist dist
COPY --from=0 /crumbs/design-system/npm-shrinkwrap.json .
COPY --from=0 /crumbs/design-system/package.json .
