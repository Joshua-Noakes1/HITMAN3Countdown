# From node:slim
FROM node
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get upgrade -y

# Copy files
COPY . .

# Install Node dependencies
RUN npm install

# Start app
CMD ["npm", "start"]