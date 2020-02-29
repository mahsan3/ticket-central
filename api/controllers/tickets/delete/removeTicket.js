const models = require('../../../models');

/**
 *
 * @param req.params.ticketId {string} - id of ticket to delete
 */
module.exports = async (req, res, next) => {

    try {

        const deletedCount = await models.ticket.destroy({
            where: {
                id: req.params.ticketId
            }
        });

        console.log(deletedCount);

        res.json({
            success: true,
            error: false,
            message: '',
            data: {
                deletedCount
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