#########################
### build environment ###
#########################

# base image
FROM node:9.6.1 as builder

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --dev

# add app
COPY . /usr/src/app

# generate build
RUN npm run build

##################
### production ###
##################

# base image
FROM httpd:2.4

COPY --from=builder /usr/src/app/dist /usr/local/apache2/htdocs/

EXPOSE 80