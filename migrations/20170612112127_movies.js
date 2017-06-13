exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('movies', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('lead');
      table.float('rating');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('movies')
};
