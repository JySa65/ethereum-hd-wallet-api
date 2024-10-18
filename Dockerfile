# Stage 1: Build the application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code
COPY . .

# Build the TypeScript application
RUN npm run build

# Stage 2: Run the application
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built application from the build stage
COPY --from=build /app/dist ./dist

# Expose the port your Express app listens on (default: 3000)
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/server.js"]
