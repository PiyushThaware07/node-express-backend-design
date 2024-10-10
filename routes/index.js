function configureRoutes(app) {
    app.get('/', (req, res) => res.send("Welcome back"));
}
module.exports = configureRoutes;