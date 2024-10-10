const { sequelize } = require("../config/database.config");
const { Model, DataTypes } = require("sequelize");

class Post extends Model { }

Post.init(
    {
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT
        },
        publish_date: {
            type: DataTypes.DATE
        },
        user_id: {
            type: DataTypes.BIGINT
        },
        image: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: "post",
        timestamps: false
    }
)

module.exports = Post;