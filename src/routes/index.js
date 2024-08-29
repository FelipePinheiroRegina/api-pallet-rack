const { Router } = require('express')
const routes = Router()

const piecesRoutes = require('./pieces.routes')

routes.use('/pieces', piecesRoutes)

module.exports = routes