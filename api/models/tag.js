module.exports = (sequelize, DataTypes) => {

    let Tag = sequelize.define('tag', {
        name: {
            type: DataTypes.STRING
        }
    });

    Tag.associate = (models) => {

        Tag.belongsToMany(models.ticket, {
            through: 'ticket_has_tag'
        });

    };

    return Tag;

};