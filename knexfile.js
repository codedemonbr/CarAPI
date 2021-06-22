module.exports = {
    client: "postgresql",
    connection: {
        host: "172.19.0.2",
        port: "5432",
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
