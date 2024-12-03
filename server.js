const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to handle JSON data
app.use(express.json());

// Example: Reading the private key from a file (ensure the file exists at the correct location)
const privateKeyPath = path.join(__dirname, 'private.key'); // Adjust path if necessary
let privateKey;

try {
  privateKey = fs.readFileSync(privateKeyPath, 'utf8');
  console.log('Private key loaded successfully');
} catch (err) {
  console.error('Error reading private key:', err);
}

// Example route to check the server is working
app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API!');
});

// Example route that uses the private key (you can adapt this to your needs)
app.get('/private-key', (req, res) => {
  if (privateKey) {
    res.send(privateKey);
  } else {
    res.status(500).send('Private key not found.');
  }
});

// Example of a POST request handler
app.post('/expense', (req, res) => {
  const expense = req.body;
  // You can add logic here to handle the expense data
  res.status(201).send(`Expense recorded: ${JSON.stringify(expense)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
