FROM node:boron

ADD https://storage.googleapis.com/kubernetes-release/release/v1.6.4/bin/linux/amd64/kubectl /usr/local/bin/kubectl

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
#  COPY package.json package-lock.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

RUN chmod +x /usr/local/bin/kubectl

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
