const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
    res.send('Order Service is running!');
});

app.listen(PORT, () => {
    console.log(`Order Service is listening on port ${PORT}`);
});