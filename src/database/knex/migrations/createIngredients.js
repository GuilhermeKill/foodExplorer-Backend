exports.up = knex => knex.schema.createTable("INGREDIENTS", table => {
    table.increments("id").primary()
    table.text("name")
    table.integer("food_id").references("id").inTable("FOODS")
   
   
});
exports.down = knex => knex.schema.dropTable("INGREDIENTS");