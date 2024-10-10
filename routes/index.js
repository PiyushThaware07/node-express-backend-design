function configureRoutes(app) {
    app.get('/', (req, res) => res.send("Welcome back"));
    app.use('/api/v1/user', require("./user.routes"));
    app.use('/api/v1/post', require("./post.routes"));
}
module.exports = configureRoutes;