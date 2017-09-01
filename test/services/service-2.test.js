const assert = require('assert')
const app = require('../../src/app')

describe('\'service2\' service', () => {
  it('registered the service', () => {
    const service = app.service('service-2')

    assert.ok(service, 'Registered the service')
  })
})
