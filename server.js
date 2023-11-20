const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Password',
    database: 'petpal'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        process.exit(1); // Stop the server if we can't connect to the database
    }
    console.log('Connected to database');
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

// Fetch and display the pet and their latest aplication date(view3)
app.get('/latestApplicationDate', (req, res) => {
    const sqlQuery = 'SELECT * FROM view_PetLatestApplication';
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

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
