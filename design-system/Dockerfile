FROM node AS build
WORKDIR /crumbs/design-system
COPY package.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=critical
COPY . .
RUN npm run build
