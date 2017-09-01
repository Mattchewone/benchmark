const assert = require('assert')
const performance = require('performance-now')
const app = require('../src/app')

const service1 = app.service('service-1')
const service2 = app.service('service-2')
const data = require('../dataset.json')

describe('Feathers application tests', () => {
  before(function (done) {
    this.server = app.listen(3030)
    this.server.once('listening', () => done())
  })

  after(function (done) {
    this.server.close(done)
  })

  beforeEach(function () {
    return service1.remove(null, {})
      .then(() => service2.remove(null, {}))
  })

  describe('Benchmarks', function () {
    it('Inserting 5000 Records with feathers-mongoose', () => {
      const start = performance()
      return service1.create(data)
        .catch(error => {
          const diff = (performance() - start).toFixed(3)
          setTimeout(function () {
            console.log(`        ${diff}ms`)
          }, 1)
        })
    }).timeout(10000)

    it('Inserting 5000 Records with feathers-mongoose-advanced', () => {
      const start = performance()
      return service2.create(data)
        .then(error => {
          const diff = (performance() - start).toFixed(3)
          setTimeout(function () {
            console.log(`        ${diff}ms`)
          }, 1)
        })
    }).timeout(10000)

    it('Inserting 5000 Records with feathers-mongoose', () => {
      const start = performance()
      return service1.create(data)
        .catch(error => {
          const diff = (performance() - start).toFixed(3)
          setTimeout(function () {
            console.log(`        ${diff}ms`)
          }, 1)
        })
    }).timeout(10000)

    it('Inserting 5000 Records with feathers-mongoose-advanced', () => {
      const start = performance()
      return service2.create(data)
        .then(error => {
          const diff = (performance() - start).toFixed(3)
          setTimeout(function () {
            console.log(`        ${diff}ms`)
          }, 1)
        })
    }).timeout(10000)

    it('Inserting 5000 Records with feathers-mongoose', () => {
      const start = performance()
      return service1.create(data)
        .catch(error => {
          const diff = (performance() - start).toFixed(3)
          setTimeout(function () {
            console.log(`        ${diff}ms`)
          }, 1)
        })
    }).timeout(10000)

    it('Inserting 5000 Records with feathers-mongoose-advanced', () => {
      const start = performance()
      return service2.create(data)
        .then(error => {
          const diff = (performance() - start).toFixed(3)
          setTimeout(function () {
            console.log(`        ${diff}ms`)
          }, 1)
        })
    }).timeout(10000)

    it('Inserting 5000 Records with feathers-mongoose', () => {
      const start = performance()
      return service1.create(data)
        .catch(error => {
          const diff = (performance() - start).toFixed(3)
          setTimeout(function () {
            console.log(`        ${diff}ms`)
          }, 1)
        })
    }).timeout(10000)

    it('Inserting 5000 Records with feathers-mongoose-advanced', () => {
      const start = performance()
      return service2.create(data)
        .then(error => {
          const diff = (performance() - start).toFixed(3)
          setTimeout(function () {
            console.log(`        ${diff}ms`)
          }, 1)
        })
    }).timeout(10000)
  })
})
