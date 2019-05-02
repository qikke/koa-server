const { Route } = require('../lib/decorator')
const { resolve } = require('path')

export const router = app => {
  const airPath = resolve(__dirname, '../routes')
  const router = new Route(app, airPath)

  router.init()
}
