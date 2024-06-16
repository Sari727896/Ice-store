FROM  node:22.1.0-slim

WORKDIR /IceCream-shop

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]