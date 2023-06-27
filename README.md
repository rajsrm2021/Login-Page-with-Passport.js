# Login Page with Passport.js

This is a simple login page implementation using Passport.js for authentication.
Passport.js is a popular authentication middleware for Node.js that provides a flexible and modular approach to handle user authentication.

## Features

1. User registration with username and password
2. User login with username and password
3. Session-based authentication using Passport.js
4. MongoDB for storing user credentials


## Prerequisites

Make sure you have the following installed:

1. Node.js (v12 or above)
2. MongoDB (v4 or above)

## Getting Started

1. Clone the repository:

git clone <https://github.com/rajsrm2021/Login-Page-with-Passport.js.git>
Install the dependencies:

i. cd login-page
ii. npm install
iii. Configure MongoDB:

2. Make sure MongoDB is running on your local machine or provide the MongoDB connection URL in the configuration file.
3. Configure Passport.js:

4. Open the config/passport.js file and configure the Passport.js strategies according to your needs (e.g., local strategy, Google strategy, etc.).
5. Update the serialization and deserialization methods to match your user model.
6 .Start the application:


### npm start

Open your browser and navigate to http://localhost:3000 to access the login page.

