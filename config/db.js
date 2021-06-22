const config = require("../knexfile");
const knex = require("knex")(config);

knex.migrate.require([config]);
module.exports = knex;
