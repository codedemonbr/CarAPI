module.exports = (app) => {
    const getCars = (req, res) => {
        app.db("cars")
            .where({ userId: req.user.id })
            .then((cars) => res.json(cars))
            .catch((err) => res.status(400).json(err));
    };

    const save = (req, res) => {
        req.body.userId = req.user.id;

        app.db("cars")
            .insert(req.body)
            .then((_) => res.status(204).send())
            .catch((err) => res.status(400).json(err));
    };

    const remove = (req, res) => {
        app.db("cars")
            .where({ id: req.params.id, userId: req.user.id })
            .del()
            .then((rowsDeleted) => {
                if (rowsDeleted > 0) {
                    res.status(204).send();
                } else {
                    const msg = `No car found with id ${req.params.id}`;
                    res.status(404).send(msg);
                }
            })
            .catch((err) => res.status(400).json(err));
    };

    return { getCars, save, remove };
};
