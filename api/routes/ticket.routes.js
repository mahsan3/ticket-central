const ticketRoutes = require('express').Router();
const getTickets = require('../controllers/tickets/get/getTickets');
const createTicket = require('../controllers/tickets/post/createTicket');
const removeTicket = require('../controllers/tickets/delete/removeTicket');
const updateTicket = require('../controllers/tickets/put/updateTicket');

ticketRoutes.get('/all', getTickets);
ticketRoutes.post('/new', createTicket);
ticketRoutes.delete('/:ticketId', removeTicket);
ticketRoutes.put('/:ticketId', updateTicket);

module.exports = ticketRoutes;