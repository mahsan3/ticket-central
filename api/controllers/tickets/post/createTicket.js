const models = require('../../../models');

/**
 * Create a new ticket
 *
 * @param req.body.title {string} - title of the ticket
 * @param req.body.description {string} - description
 * @param req.body.status {string} - pk from the status table
 * @param req.body.tags {string[]} - pks from tags table
 * @param req.body.assignedTo {string} - pk of the user who this is assigned to
 * @param req.body.creator {string} - pk of the user who created this
 */
module.exports = async (req, res, next) => {

    try {

        const newTicket = await models.ticket.create({
            title: req.body.title,
            description: req.body.description
        });

        await newTicket.setStatus(req.body.status);
        await newTicket.setTicket_assigned_to(req.body.assignedTo);
        await newTicket.setTicket_creator(req.body.creator);
        await newTicket.setTags(req.body.tags);


        console.log(newTicket);

        res.json({
            success: true,
            error: false,
            message: 'Ticket created successfully',
            data: {
                newTicket
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