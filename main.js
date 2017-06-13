$(document).ready(function() {
  console.log('hello');
  $.get('https://crud-movies-api.herokuapp.com/api/movies/')
    .then(function(result) {
      console.log(result);
    })
})
