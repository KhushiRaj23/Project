# Explore India Website - User Authentication System

This is a travel guide website built with Express, Node.js, and MongoDB. It allows users to explore various travel destinations, read and write reviews, and get detailed information about places to visit.

## Features

- Explore travel destinations
- User authentication (registration and login)
- Secure password storage

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/travel-guide-website.git
    cd travel-guide-website
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/travelguide
    JWT_SECRET=your_jwt_secret
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints

### User Authentication

#### Register a new user

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Body:**
  
  ```json
  {
    "username": "yourusername",
    "email": "youremail@example.com",
    "password": "yourpassword"
  }

**This project is licensed under the MIT License.**
  
### Explanation:

- **Prerequisites:** Lists software that needs to be installed before setting up the project.
- **Installation:** Provides step-by-step instructions to set up and run the project locally.
- **Usage:** Explains how to start the server.
- **API Endpoints:** Describes the available API endpoints for user authentication and travel destination management.
- **Project Structure:** Gives an overview of the project's file and directory structure.
- **License:** Specifies the project's licensing information.

You can adjust the paths and filenames according to your project structure and naming conventions.

