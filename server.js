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
        if (err) {
            console.error('Error fetching pets: ', err);
            res.status(500).send('Error fetching pets');
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
