# PetPal - A Pet Adoption Platform

PetPal is a web-based platform designed to connect potential pet adopters with available pets, showcasing pets from various shelters, adoption processes, and pet accessories. The platform is built with HTML, CSS, JavaScript (client-side), and Node.js with Express (server-side).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- A modern web browser

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the repository**
   ```sh
   git clone [URL of your repository]

2. **Navigate to the project directory**
   ```sh
   cd [project-directory]

3. **Install dependencies**
   Navigate to the root of your project directory and run:
   ```sh
   npm install

4. **Set up the database**
   - Create a MySQL database named petpal.
   - Import the provided SQL script to set up tables and populate them with initial data.

5. **Update database configuration**
   Modify the server.js file to include your MySQL user and password.
   ```sh
   const db = mysql.createConnection({
    host: '127.0.0.1',
    user: '[Your MySQL username]',
    password: '[Your MySQL password]',
    database: 'petpal'});

6. **Start the server**
   From the root of your project, run:
   This will start the Node.js server on the defined port, typically http://localhost:3000.
   ```sh
   node server.js

### Running the application
Open your web browser and go to http://localhost:3000. You should now be able to interact with the PetPal platform.

### Built With
- Node.js - The backend framework used
- Express - Node.js library for handling HTTP requests
- MySQL - Database
- Bootstrap - Frontend framework for styling
- JavaScript - Client-side scripting language
