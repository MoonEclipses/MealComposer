FROM node:alpine
WORKDIR /usr/app/front
EXPOSE 3000
COPY ./package-lock.json ./package.json
RUN npm install
CMD ["npm", "start"]
