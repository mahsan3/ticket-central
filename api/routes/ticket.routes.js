const ticketRoutes = require('express').Router();
const getTickets = require('../controllers/tickets/get/getTickets');
const createTicket = require('../controllers/tickets/post/createTicket');
const removeTicket = require('../controllers/tickets/delete/removeTicket');

ticketRoutes.get('/all', getTickets);
ticketRoutes.post('/new', createTicket);
ticketRoutes.delete('/:ticketId', removeTicket);

module.exports = ticketRoutes;