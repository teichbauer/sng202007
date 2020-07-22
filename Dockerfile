FROM node:12.18.2

WORKDIR /var/dw

COPY ./package.json ./

COPY ./client/package.json ./client/

RUN npm install

RUN npm run client-install

COPY ./client ./client/

RUN npm run client-build

COPY . .

# CMD accept as many parameter as I need to have. 
# just put them into array as separately quoted strings
# -------------------------------------------------------
# CMD is the default command to run when a container is started
# from the built image.
# attention:
# if I do
#  docker run -it -p 5000:5000 <image-name> bash
# where "bash" is the command I let the container start after run up.
# by doing so I over-write the CMD defined in this Dockerfile: BE AWARE!
# if I want to run bash with this container in interaction, I would better
# run it without -it, and no bash at the end. Then do
#
#   docker exec -it <container-id> bash
#
# -----------------------------------------------------------
CMD [ "npm", "run", "server" ]