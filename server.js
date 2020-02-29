const express = require('express');
const app = express();
const appRoutes = require('./api/routes/routes');

app.use('/', appRoutes);

const port = process.env.PORT || '3000';
const ip   = process.env.NODE_IP || 'localhost';

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});