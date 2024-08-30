FROM node:20.13.1
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5321
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]