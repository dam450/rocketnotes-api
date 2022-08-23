
exports.up = knex => knex.schema.createTags("tags", table => {
  table.increments("id")
  
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE")
  table.integer("user_id").references("id").inTable("users")
  
  table.text("name").notNullable()

}) 


exports.down = knex => knex.schema.dropTags("tags")
