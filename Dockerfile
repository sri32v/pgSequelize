FROM node:15
WORKDIR /app
COPY . .
RUN npm install
# RUN npm install -g concurrently
# CMD ["bash","start.sh"]
CMD ["npm","run","start"]
# CMD ["concurrently","npm:start","npm:migrate","npm:seed"]
# RUN npm run migrate