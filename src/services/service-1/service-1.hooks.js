
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      context => {
        console.time('service-1')
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      context => {
        console.timeEnd('service-1')
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [
      context => {
        console.timeEnd('service-1')
      }
    ],
    update: [],
    patch: [],
    remove: []
  }
}
