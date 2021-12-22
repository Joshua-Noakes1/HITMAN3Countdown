# From node:slim
FROM node:slim
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get upgrade -y && apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y

# Copy files
COPY . .

# Install Node dependencies
RUN npm install

# Start app
CMD ["npm", "start"]