module.exports = (sequelize, DataTypes) => {

    let User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    });

    User.associate = (models) => {

        User.hasOne(models.ticket, {
            as: 'ticker_creator'
        });

        User.hasOne(models.ticket, {
            as: 'ticker_assigned_to'
        });

        User.belongsTo(models.role);

    };

    return User;

};