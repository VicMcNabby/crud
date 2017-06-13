$(document).ready(function() {
  console.log('hello');
  $('button').click(getMovies)

  function getMovies(event) {
    event.preventDefault()
    $('form').hide()
    let ID = $('.search').val()
    $.get('https://crud-movies-api.herokuapp.com/api/movies/' + ID)
      .then(function(result) {
        console.log(result);
        const div = '<div class="card blue darken-3"><div class="card-content yellow-text"><span class="card-title">'
        if (ID) {
          $('.row').append(div + result.title + '</span><p>Lead Actor: ' + result.lead + '</p><p>Rating: ' + result.rating + '</p></div></div></div>')
        } else {
          for (let i = 0; i < result.length; i++) {
            const movieTitle = result[i].title
            const movieLead = 'Lead Actor: ' + result[i].lead
            const movieRating = 'Rating: ' + result[i].rating
            $('.row').append('<div class="col l3 m4 s6">' + div + movieTitle + '</span><p>' + movieLead + '</p><p>' + movieRating + '</p></div></div>')
          }
        }
      })
  }
})
