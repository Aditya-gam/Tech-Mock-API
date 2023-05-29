# Tech mock API
This repository contains a MERN (MongoDB, Express.js, React, Node.js) stack application. It consists of two folders: `server` and `client`. The `server` folder contains the backend server code, while the `client` folder contains the frontend React code.

## Installation

Please follow the steps below to install and run the application:

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/your-repo.git](https://github.com/Aditya-gam/Tech-Mock-API.git)

2. Navigate to the project root directory:

   ```bash 
   cd your-repo

3. Install server dependencies:
   ```bash
   cd server
   npm install

4. Create a .env file in the server folder with the following environment variables:
   ```plain text
   PORT= 8080
   JWT_SECRET= 'your-jwt-secret' # Generate JWT KEY: openssl rand -base64 32
   MONGO_URI= 'your-mongodb-uri'
   EMAIL_HOST="smtp.ethereal.email"
   EMAIL= 'Your-Email'
   PASSWORD= 'Your-Password'
  Replace your-mongodb-uri with your MongoDB connection URI and your-jwt-secret with your preferred secret key for JWT authentication.

5. Start the server application
   ```bash
   npm start

6. Install client dependencies:
   ```bash
   cd ../client
   npm install 

6. Start the client application
   ```bash
   npm start
   
Open your browser and visit http://localhost:3000 to see the application running.

## Additional Notes
- The server will be running on port 8080 by default. You can change the port number in the .env file if needed.

- The client runs on a development server and proxies API requests to the server using the http-proxy-middleware package. The proxy configuration is already set up in the client/package.json file.

- Make sure to have MongoDB installed and running, and replace your-mongodb-uri in the .env file with your actual MongoDB connection URI.
