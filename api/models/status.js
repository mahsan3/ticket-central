module.exports = (sequelize, DataTypes) => {

    let Status = sequelize.define('status', {
        name: {
            type: DataTypes.STRING
        }
    });

    Status.associate = (models) => {

    };

    return Status;

};