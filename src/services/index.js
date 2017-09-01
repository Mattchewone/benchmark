const service1 = require('./service-1/service-1.service.js')
const service2 = require('./service-2/service-2.service.js')
module.exports = function () {
  const app = this // eslint-disable-line no-unused-vars
  app.configure(service1)
  app.configure(service2)
}
