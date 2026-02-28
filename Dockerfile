FROM node:20

WORKDIR /ashpak

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]