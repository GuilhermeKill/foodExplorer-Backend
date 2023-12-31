exports.up = knex => knex.schema.createTable("USERS", table => {
    table.increments("id").primary()
    table.text("name")
    table.text("email")
    table.text("password")
    table.boolean("isAdmin")
   
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
});
exports.down = knex => knex.schema.dropTable("USERS");