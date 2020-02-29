const express = require('express');
const app = express();

const port = process.env.PORT || '3000';
const ip   = process.env.NODE_IP || 'localhost';

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});