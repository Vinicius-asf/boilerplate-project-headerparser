const { agent } = require('supertest')
const request = require('supertest')
const createServer = require('../server')

const app = createServer()

describe('Endpoints', () => {
  it('receive valid JSON', async () => {
    const res = await request(app)
      .get('/api/whoami')
      .set({
        'x-forward-for':'192.168.29.29',
        'accept-language':'"pt-BR,pt;q=0.9',
        'user-agent':'Mozilla/5.0'
    })
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