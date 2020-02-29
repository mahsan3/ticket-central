const ticketRoutes = require('express').Router();
const getTickets = require('../controllers/tickets/get/getTickets');

ticketRoutes.get('/all', getTickets);

module.exports = ticketRoutes;