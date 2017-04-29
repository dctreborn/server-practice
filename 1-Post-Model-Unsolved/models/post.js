module.exports = function(sequelize, DataTypes) {
    var validation = {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            allowNull: false
        }
    };
    // Add code here to create a Post model
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
    var Post = sequelize.define("Post", {
        text: validation,
        title: validation,
        category: validation,
    });
    return Post;
};