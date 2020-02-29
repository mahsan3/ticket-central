const ticketRoutes = require('express').Router();
const getTickets = require('../controllers/tickets/get/getTickets');
const createTicket = require('../controllers/tickets/post/createTicket');

ticketRoutes.get('/all', getTickets);
ticketRoutes.post('/new', createTicket);

module.exports = ticketRoutes;