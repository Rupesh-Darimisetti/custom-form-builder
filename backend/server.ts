// Importing module
import express from 'express';

const app = express();
const PORT: Number = 300;

// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to trpescript backend!');
})

// Server setup
app.listen(PORT,() => {
    console.log('The application is listening'
    + 'on port http://localhost:'+ PORT);
})
