const models = require('../../../models');

/**
 *
 * @param req.params.ticketId {string} - id of ticket to update
 * @param req.body.title {string} - title of the ticket
 * @param req.body.description {string} - description
 * @param req.body.status {string} - pk from the status table
 * @param req.body.tags {string[]} - pks from tags table
 * @param req.body.assignedTo {string} - pk of the user who this is assigned to
 * @param req.body.creator {string} - pk of the user who created this
 */
module.exports = async (req, res, next) => {

    try {

        // ticket.update will return an array, with the first value being the number
        // and the 2nd being the actual instance updated. However, that 2nd value is only
        // returned for Postgres when the option 'returning: true' is set. That's why the setters
        // below would not work. There, I will be just getting the model instance using findByPk.
        const ticket = await models.ticket.findByPk(req.params.ticketId);

        ticket.title = req.body.title;
        ticket.description = req.body.description;
        await ticket.save();

        console.log(ticket);

        await ticket.setStatus(req.body.status);
        await ticket.setTicket_assigned_to(req.body.assignedTo);
        await ticket.setTicket_creator(req.body.creator);
        await ticket.setTags(req.body.tags);


        res.json({
            success: true,
            error: false,
            message: 'Update was successful.',
            data: {
                ticket
            }
        });

    }catch(err) {

        res.json({
            success: false,
            error: true,
            message: err.message
        });

    }

};