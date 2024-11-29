# Dashboard Application - MERN Stack Project

This project is a **Dashboard Web Application** built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features different user access levels, including **admin** and **regular users**, providing functionalities tailored for each role.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Demo

### Screenshots
- **Login Page**
![Login Page](https://github.com/nishantvekariya1/role-based-access-control/blob/master/screenshots/login.png)

- **Register Page**
![Register Page](https://github.com/nishantvekariya1/role-based-access-control/blob/master/screenshots/register.png)

- **Home Page (Without Login)**
![Home Page - Without Login](https://github.com/nishantvekariya1/role-based-access-control/blob/master/screenshots/homepage.png)

- **Home Page (Admin Login)**
![Home Page - Admin Login](https://github.com/nishantvekariya1/role-based-access-control/blob/master/screenshots/adminpage.png)

- **Home Page (User Login)**
![Home Page - User Login](https://github.com/nishantvekariya1/role-based-access-control/blob/master/screenshots/userpage.png)

## Features

- 🔒 User authentication (signup, login, logout)
- 🏠 Dynamic home page based on user role (admin and user)
- 📄 User profile management
- 🖼️ Customizable avatars and bio updates
- 🛡️ Role-based content access and navigation
- ⚡ Fast, responsive UI with React hooks
- 💬 Enhanced user interaction capabilities (comments, likes)

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and additional information
- **Express.js**: Web application framework for server-side logic
- **React.js**: Frontend library for building dynamic user interfaces
- **Node.js**: JavaScript runtime for backend development
- **Mongoose**: ODM for MongoDB for data modeling
- **JWT**: JSON Web Tokens for secure user authentication
- **CSS & Styled Components**: For styling the application

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name
    ```

2. Navigate to the server directory and install server dependencies:
    ```bash
    cd server
    npm install
    ```

3. Navigate to the client directory and install client dependencies:
    ```bash
    cd client
    npm install
    ```

4. Create a `.env` file in the root directory of the server and add the following environment variables:
    ```env
    MONGO_URL=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the development servers:

    - **Server**:
        ```bash
        cd server
        npm run start
        ```

    - **Client**:
        ```bash
        cd client
        npm run start
        ```

6. Open your browser and navigate to `http://localhost:5000` to view the dashboard application.
