FROM public.ecr.aws/ubuntu/ubuntu:20.04_stable
RUN apt-get update

RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_10.x  | bash -
RUN apt-get -y install nodejs
RUN ln -s /usr/bin/nodejs /usr/local/bin/node

WORKDIR /myapp

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]