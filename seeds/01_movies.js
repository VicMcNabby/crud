exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE movies RESTART IDENTITY CASCADE;')
    .then(function() {
      // Inserts seed entries
      return knex('movies').insert([{
          title: 'Die Hard',
          lead: 'Bruce Willis',
          rating: 10.0
        },
        {
          title: 'The Matrix',
          lead: 'Keanu Reeves',
          rating: 8.7
        },
        {
          title: 'Fight Club',
          lead: 'Brad Pitt',
          rating: 8.8
        },
        {
          title: 'Inception',
          lead: 'Leonardo DiCaprio',
          rating: 8.8
        },
        {
          title: 'The Dark Knight',
          lead: 'Christian Bale',
          rating: 9.0
        },
        {
          title: 'Forrest Gump',
          lead: 'Tom Hanks',
          rating: 8.8
        },
        {
          title: 'The Empire Strikes Back',
          lead: 'Mark Hammill',
          rating: 9.3
        },
        {
          title: 'Iron man',
          lead: 'Robert Downey Jr',
          rating: 7.9
        },
        {
          title: 'The Avengers',
          lead: 'Chris Evans',
          rating: 8.1
        },
        {
          title: 'The Bourne Identity',
          lead: 'Matt Damon',
          rating: 8.0
        }
      ]);
    });
};
