const app = require("./config/express.config");
const dotenv = require("dotenv");
dotenv.config();
const { dbConnection } = require("./config/database.config");


// 1.connect database --> 2. start server
dbConnection().then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`--> Server Running at http://localhost:${port}`);
    })
}).catch((error) => {
    console.error("--> Database connection failed : ", error);
    process.exit(1);
})
