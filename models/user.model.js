const { sequelize } = require("../config/database.config");
const { Model, DataTypes } = require("sequelize");

class User extends Model { }

User.init(
    {
        fname: {
            type: DataTypes.STRING
        },
        lname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: "user",
        timestamps: false
    }
)

module.exports = User;