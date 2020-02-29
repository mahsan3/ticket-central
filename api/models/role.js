module.exports = (sequelize, DataTypes) => {

    let Role = sequelize.define('role', {
        name: {
            type: DataTypes.STRING
        }
    });

    Role.associate = (models) => {

    };

    return Role;

};