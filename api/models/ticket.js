module.exports = (sequelize, DataTypes) => {

    let Ticket = sequelize.define('ticket', {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT,
        }
    });

    Ticket.associate = (models) => {

        Ticket.belongsTo(models.status);

        Ticket.belongsTo(models.user, {
            as: 'ticket_creator'
        });

        Ticket.belongsTo(models.user, {
            as: 'ticket_assigned_to'
        });

        Ticket.belongsToMany(models.tag, {
            through: 'ticket_has_tag'
        });

    };

    return Ticket;

};