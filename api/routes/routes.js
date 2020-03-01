// Brings together all the other routes here
const routes = require('express').Router();
const ticketRoutes = require('./ticket.routes');
const checkJwt = require('../utils/check-jwt');

routes.get('/heartbeat', (req, res) => {
    res.status(200).json({ message: 'API is up.' });
});

routes.use('/ticket', checkJwt, ticketRoutes);

module.exports = routes;