const request = require('supertest')
const expect = require('chai').expect
const knex = require('../db/knex')
const app = require('../app')
const fixtures = require('./fixtures')

describe('CRUD movies', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        return knex.seed.run()
      }).then(() => done())
  })

  it('List all records', (done) => {
    request(app)
      .get('/api/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array')
        expect(response.body).to.deep.equal(fixtures.movies)
        done()

      })
  })
  it('List a record by id', (done) => {
    request(app)
      .get('/api/movies/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object')
        expect(response.body).to.deep.equal(fixtures.movies[0])
        done()

      })
  })
  // it('Creates a record', (done) => {
  //   request(app)
  //     .post('/api/movies')
  //     .send(fixtures.movie)
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).to.be.a('object')
  //       fixtures.movie.id = response.body.id
  //       expect(response.body).to.deep.equal(fixtures.movie)
  //       done()
  //     })
  // })
  // it('Updates a record', (done) => {
  //   fixtures.movie.rating = 8
  //   request(app)
  //     .put('/api/movies/10')
  //     .send(fixtures.movie)
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).to.be.a('object')
  //       fixtures.movie.id = response.body.id
  //       expect(response.body).to.deep.equal(fixtures.movie)
  //       done()
  //     })
  // })
})
