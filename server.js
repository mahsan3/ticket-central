const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const appRoutes = require('./api/routes/routes');
const models = require('./api/models');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', appRoutes);

models.sequelize.sync({alter: true}).then(() => {
    console.log('[X] Sequelize Successfully synced.');
}).catch(err => {
    throw new Error(err);
});

const port = process.env.PORT || '3001';
const ip   = process.env.NODE_IP || 'localhost';

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});