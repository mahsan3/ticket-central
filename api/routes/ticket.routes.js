const ticketRoutes = require('express').Router();
const getTickets = require('../controllers/tickets/get/getTickets');
const createTicket = require('../controllers/tickets/post/createTicket');
const removeTicket = require('../controllers/tickets/delete/removeTicket');
const updateTicket = require('../controllers/tickets/put/updateTicket');
const getTicketOptions = require('../controllers/tickets/get/getTicketOptions');

ticketRoutes.get('/all', getTickets);
ticketRoutes.get('/optional-data', getTicketOptions);
ticketRoutes.post('/new', createTicket);
ticketRoutes.delete('/:ticketId', removeTicket);
ticketRoutes.put('/:ticketId', updateTicket);

module.exports = ticketRoutes;