const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dune2overStarWars',
    database: 'poems'
});

// Connect to the database
db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

// Define a route to get data
app.get('/data', (req, res) => {
    db.query('SELECT * FROM Poems', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});