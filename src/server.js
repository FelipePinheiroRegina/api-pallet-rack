require('express-async-errors')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io  = require('socket.io')(server, {cors: {origin: 'http://localhost:5173'}})
const routes = require('./routes')
const appError = require('./utils/appError')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(routes)

let activeUsers = {};

io.on('connection', socket => {
    console.log('Usuário conectado!', socket.id)

    socket.on('disconnect', reason => {
        console.log('User disconnected:', socket.data.username)
        // Remover o usuário do objeto de usuários ativos
        delete activeUsers[socket.data.username]

        // Enviar a lista atualizada de usuários ativos para todos os clientes
        io.emit('users:update', Object.values(activeUsers))
    })

    socket.on('set_username', username => {
        socket.data.username = username
        console.log(socket.data.username)

        // Adicionar o usuário ao objeto de usuários ativos
        activeUsers[socket.data.username] = { name: socket.data.username }

        // Enviar a lista atualizada de usuários ativos para todos os clientes
        io.emit('users:update', Object.values(activeUsers));
    })

    socket.on('message', text => {
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username
        })
    })

    socket.on('refresh', refresh => {
        io.emit('reload', {
            reload: true
        })
    })
})

app.use((error, request, response, next) => {
    if(error instanceof appError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    console.log(error)

    return response.status(500).json({
        status: 'error',
        message: 'Internal error server'
    })
})

const PORT = 3000
server.listen(PORT, () => console.log('Server is running on ' + PORT))
