// Initializes the `service1` service on path `/service-1`
const createService = require('feathers-mongoose')
const createModel = require('../../models/service-1.model')
const hooks = require('./service-1.hooks')
const filters = require('./service-1.filters')

module.exports = function () {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'service-1',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/service-1', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('service-1')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
