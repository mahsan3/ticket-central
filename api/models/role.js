module.exports = (sequelize, DataTypes) => {

    let Role = sequelize.define('role', {
        name: {
            type: DataTypes.STRING
        }
    });

    Role.associate = (models) => {

        Role.hasOne(models.user);

    };

    return Role;

};