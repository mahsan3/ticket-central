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

    };

    return User;

};