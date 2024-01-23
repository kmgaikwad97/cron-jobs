FROM node:16
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3400
CMD ["npm","start"]