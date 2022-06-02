const request = require('supertest')
const createServer = require('../server')

const app = createServer()

describe('Endpoints', () => {
  it('receive valid JSON', async () => {
    const res = await request(app)
      .get('/api/whoami')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("ipaddress")
    expect(res.body).toHaveProperty("language")
    expect(res.body).toHaveProperty("software")
  })

  it('invalid path', async () => {
    const res = await request(app)
      .get('/api/whoiam')
    expect(res.statusCode).toEqual(404)
  })
})