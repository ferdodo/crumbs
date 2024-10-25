FROM node
WORKDIR /crumbs/design-system
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit --audit-level=low
COPY . .
RUN npm run build