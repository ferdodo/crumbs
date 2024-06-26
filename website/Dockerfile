FROM crumbs-design-system

FROM node

WORKDIR /crumbs/website

RUN npm config set maxsockets 1
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit --audit-level=low

COPY --from=0 /crumbs/design-system /crumbs/design-system

COPY . .

RUN npm run build
CMD npm run start