// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/movies_watched'
  },
  test: {
    client: 'postgresql',
    connection: 'postgres://localhost/test-movies_watched'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
