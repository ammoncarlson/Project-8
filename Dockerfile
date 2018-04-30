gFROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port 4000 and run 'node Node.js'
EXPOSE 4000
CMD [ "node", "Node.js" ]

# To build:
# docker build -t <dockerhub_username>/<image_name>:<tag> .

# To run:
# docker run -d --name <name> -p 4000:4000 <dockerhub_username>/<image_name>:<tag>

# Server is running at http://localhost:4000
