import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Create a connection to the database
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Dune2overStarWars',
    database: 'poems'
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Connected to database');
});

// Define a route to get data
app.get('/data', (req, res) => {
    db.query('SELECT * FROM Poems', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
