const assert = require('assert')
const app = require('../../src/app')

describe('\'service1\' service', () => {
  it('registered the service', () => {
    const service = app.service('service-1')

    assert.ok(service, 'Registered the service')
  })
})
