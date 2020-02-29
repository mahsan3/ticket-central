const models = require('../../../models');

module.exports = async (req, res, next) => {

    try {

        const tickets = await models.ticket.findAll({
            include: [{
                model: models.user,
                as: 'ticket_creator',
                attributes: ['name']
            }, {
                model: models.user,
                as: 'ticket_assigned_to',
                attributes: ['name']
            }, {
                model: models.status,
                attributes: ['name']
            }, {
                model: models.tag,
                attributes: ['name'],
                through: {
                    attributes: [] // don't need any attributes from join table
                }
            }]
        });

        console.log(tickets);

        res.json({
            success: true,
            error: false,
            message: '',
            data: {
                tickets
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