const { Router } = require('express')
const piecesRoutes = Router()

const PiecesController = require('../controllers/PiecesController')
const piecesController = new PiecesController()

piecesRoutes.post('/', piecesController.create)
piecesRoutes.get('/', piecesController.index)
piecesRoutes.delete('/:id', piecesController.delete)
piecesRoutes.put('/:id', piecesController.update)

module.exports = piecesRoutes

