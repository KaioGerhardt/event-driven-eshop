const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Inventory Service is running!');
});

app.listen(PORT, () => {
    console.log(`Inventory Service is listening on port ${PORT}`);
});