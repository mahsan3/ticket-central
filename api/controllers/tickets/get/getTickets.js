const models = require('../../../models');

module.exports = async (req, res, next) => {

    try {

        const tickets = await models.ticket.findAll({
            include: [{
                model: models.user,
                as: 'ticket_creator',
                attributes: ['name', 'email'],
            }, {
                model: models.user,
                as: 'ticket_assigned_to',
                attributes: ['name', 'email'],
                where: {
                    email: req.user['http://localhost:3001.com/email']
                }
            }, {
                model: models.status,
                attributes: ['name']
            }, {
                model: models.tag,
                attributes: ['id', 'name'],
                through: {
                    attributes: [] // don't need any attributes from join table
                }
            }]
        });

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