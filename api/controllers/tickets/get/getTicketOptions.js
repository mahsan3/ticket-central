const models = require('../../../models');

module.exports = async (req, res, next) => {

    try {

        const users = await models.user.findAll({
            attributes: ['id', 'name', 'email']
        });

        const tags = await models.tag.findAll({
            attributes: ['id', 'name']
        });

        const status = await models.status.findAll({
            attributes: ['id', 'name']
        });

        res.json({
            success: true,
            error: false,
            message: '',
            data: {
                users,
                tags,
                status
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