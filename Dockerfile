# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install all dependencies (including devDependencies for development)
RUN npm install

# Install typescript globally so you can compile inside the container
RUN npm install -g typescript

# Copy the entire project to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Use nodemon to start the app and enable hot-reloading
CMD ["npx", "nodemon", "--watch", ".", "--exec", "ts-node", "server.ts"]
