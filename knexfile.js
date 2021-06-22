module.exports = {
    client: "postgresql",
    connection: {
        database: "cars",
        user: "postgres",
        password: "Postgres2021!",
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: "knex_migrations",
    },
};
/**
 * Esse arquivo tem as configurações no knex para manipular o banco de dados
 */