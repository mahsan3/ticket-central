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

    };

    return Ticket;

};