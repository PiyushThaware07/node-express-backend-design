// config/database.config.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    username: "postgres",
    password: "root",
    port: 5432,
    host: "localhost",
    dialect: "postgres",
    database: "graphql-db",
    logging: false,
});

async function dbConnection() {
    try {
        console.log("Connecting to the database...");
        await sequelize.authenticate();
        console.log("--> Database connected successfully");
        console.log("Syncing models...");
        await sequelize.sync();
        console.log("--> Models synced successfully");
    } catch (error) {
        throw error;
    }
}

module.exports = { dbConnection, sequelize };
