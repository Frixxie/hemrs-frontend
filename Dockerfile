FROM node:22-alpine3.19

COPY . .

RUN npm install && npm run build

CMD ["node", "build"]
