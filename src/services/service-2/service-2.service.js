// Initializes the `service2` service on path `/service-2`
const createService = require('feathers-mongoose-advanced')
const createModel = require('../../models/service-2.model')
const hooks = require('./service-2.hooks')
const filters = require('./service-2.filters')

module.exports = function () {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'service-2',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/service-2', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('service-2')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
