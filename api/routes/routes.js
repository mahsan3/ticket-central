// Brings together all the other routes here
const routes = require('express').Router();
const ticketRoutes = require('./ticket.routes');

routes.get('/heartbeat', (req, res) => {
    res.status(200).json({ message: 'API is up.' });
});

routes.use('/tickets', ticketRoutes);

module.exports = routes;