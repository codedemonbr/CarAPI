exports.up = function (knex, Promise) {
    return knex.schema.createTable("cars", (table) => {
        table.increments("id").primary();
        table.string("brand").notNull(); // Marca
        table.string("model").notNull(); // Modelo
        table.integer("year").notNull(); // Ano
        table.string("fuel").notNull(); // Combustível
        table.decimal("price").notNull(); //Preço
        table.integer("userId").references("id").inTable("users").notNull(); // relação Carros <=> usuários
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("cars");
};
