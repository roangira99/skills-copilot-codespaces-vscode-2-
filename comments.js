// Create web server
// 1. Create web server
// 2. Create route
// 3. Create controller
// 4. Create model

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create route
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/comments', (req, res) => {
    res.send('Comments');
});

// 3. Create controller
app.get('/comments/:id', (req, res) => {
    res.send('Comments ' + req.params.id);
});

// 4. Create model
app.get('/comments/:id/edit', (req, res) => {
    res.send('Edit comments ' + req.params.id);
});

// 5. Start web server
app.listen(3000, () => {
    console.log('Web server running at http://localhost:3000');
});











