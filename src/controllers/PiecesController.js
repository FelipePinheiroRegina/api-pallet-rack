const appError = require("../utils/appError")
const knex = require('../database/knex')

class PiecesController {
    async create(req, res) {
        const { name, code, pallet_rack, company, amount} = req.body

        const pieceData = {
            name, 
            code, 
            pallet_rack, 
            company,
            "created_at": knex.raw("datetime('now', 'localtime')"),
            "updated_at": knex.raw("datetime('now', 'localtime')"),
        }

        if (amount > 0) {
            pieceData.amount = amount;
        }

        await knex('pieces').insert(pieceData);

        return res.json({message: 'Requisição bem sucedida'})
    }

    async index(req, res) {
        const response = await knex('pieces').orderBy('created_at', 'desc')

        return res.json(response)
    }

    async delete(req, res){
        const { id } = req.params

        await knex('pieces').where({id}).delete()

        return res.json({message: 'Delete bem sucedido'})
    }

    async update(req, res) {
        const { name, code, pallet_rack, company, amount, look, hours_down } = req.body
        const { id } = req.params
    
        // Busca o item pelo ID
        const piece = await knex('pieces').where({ id }).first()
    
        if (!piece) {
            return res.status(404).json({ message: 'Item não encontrado' })
        }

        piece.name        = name        ?? piece.name
        piece.code        = code        ?? piece.code
        piece.pallet_rack = pallet_rack ?? piece.pallet_rack
        piece.company     = company     ?? piece.company
        piece.amount      = amount      ?? piece.amount
        piece.look        = look        ?? piece.look
        piece.hours_down  = hours_down  ?? piece.hours_down
    
        const currentDateTime = new Date();
        currentDateTime.setHours(currentDateTime.getHours() - currentDateTime.getTimezoneOffset() / 60);
        const formattedDateTime = currentDateTime.toISOString().slice(0, 19).replace('T', ' ');
    
        piece.updated_at = formattedDateTime;
    
        delete piece.id
    
        await knex('pieces').where({ id }).update(piece)
    
        return res.json({ message: 'Update bem sucedido' })
    } 
}

module.exports = PiecesController