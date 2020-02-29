module.exports = (sequelize, DataTypes) => {

    let Tag = sequelize.define('tag', {
        name: {
            type: DataTypes.STRING
        }
    });

    Tag.associate = (models) => {

    };

    return Tag;

};