exports.up = knex => knex.schema.createTable("FOODS", table => {
    table.increments("id").primary()
    table.text("name")
    table.integer("user_id").references("id").inTable("USERS")
    table.text("category")
    table.integer("price")
    table.text("description")
    table.text("image").nullable().defaultTo(null)
   
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
});
exports.down = knex => knex.schema.dropTable("FOODS");