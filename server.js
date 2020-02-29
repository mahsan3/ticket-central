const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const appRoutes = require('./api/routes/routes');
const models = require('./api/models');

app.use(bodyParser.json());

app.use('/', appRoutes);

models.sequelize.sync({alter: true}).then(() => {
    console.log('[X] Sequelize Successfully synced.');
}).catch(err => {
    throw new Error(err);
});

const port = process.env.PORT || '3000';
const ip   = process.env.NODE_IP || 'localhost';

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});