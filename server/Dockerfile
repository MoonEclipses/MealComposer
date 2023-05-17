FROM node:alpine
WORKDIR /usr/app/back
EXPOSE 8080
COPY package-lock.json ./package.json
RUN npm install
CMD ["npm","start"]
