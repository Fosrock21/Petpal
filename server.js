const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Password',
    database: 'petpal'
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        process.exit(1); // Stop the server if we can't connect to the database
    }
    console.log('Connected to database');
});


// Endpoint to handle adding a new pet
app.post('/add-pet', (req, res) => {
    const { name, age, breed, type, healthInfo, shelterID } = req.body;
    const sql = 'INSERT INTO pet (Name, Age, Breed, Type, HealthInfo, ShelterID) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, age, breed, type, healthInfo, shelterID], (err, result) => {
        // Handle the result of the query here
    });
});

// Fetch and display pets
app.get('/display-pets', (req, res) => {
    const sqlQuery = 'SELECT * FROM pet';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});

// Fetch and display Shelters
app.get('/display-shelters', (req, res) => {
    const sqlQuery = 'SELECT * FROM shelter';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});


// Fetch and display a complete overview of adoption applications(view1)
app.get('/applicationDetails', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_ApplicationDetails';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});

// Fetch and display user who has applied for a pet adoption and indicates
//whether they have a subscription to the newsletter(view2)
app.get('/userApplicationNewsletterMatch', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_userapplicationnewslettermatch';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});

// Fetch and display the pet and their latest aplication date(view3)
app.get('/latestApplicationDate', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_PetLatestApplication';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});


// Fetch and display pets and the accessories they may have(view4)
app.get('/completePetAccessoryInfo', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_CompletePetAccessoryInfo';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});


// Fetch and display accessories and indicate their availability status. (view5)
app.get('/availableAndUnavailableAccessories', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_AvailableAndUnavailableAccessories';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});


// Fetch and display Users and Their Pet Preferences(view6)
app.get('/userPreferences', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_userpreferences';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});

// Fetch and display Adoption Status(view7)
app.get('/adoptionStatus', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_adoptionstatus';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});

// Fetch and display The pet and their current shelter(view8)
app.get('/Petshelters', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_petshelters';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});


// Fetch and display Accessory Availability by Pet Type(view9)
app.get('/accessoriesForPets', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_AccessoriesForPets';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});

//view 10 shows users who recived a notification
app.get('/notificationSubscriptionMatch', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_NotificationSubscriptionMatch';
    db.query(sqlQuery, (err, results) => {
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
