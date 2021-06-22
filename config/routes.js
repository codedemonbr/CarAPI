module.exports = (app) => {
    app.post("/signup", app.api.user.save);
    app.post("/signin", app.api.auth.signin);

    app.route("/cars")
        .all(app.config.passport.authenticate())
        .get(app.api.car.getCars)
        .post(app.api.car.save);

    app.route("/cars/:id")
        .all(app.config.passport.authenticate())
        .delete(app.api.car.remove);

    app.route("/cars/:id")
        .all(app.config.passport.authenticate())
        .put(app.api.car.update);
};
