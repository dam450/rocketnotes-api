const { Router } = require('express') // requisita a lib express

const usersRouter = require('./users.routes') // requisita o arquivo de rotas do usuário
const notesRouter = require('./notes.routes')

const routes = Router() 

//routes recebe as rotas de usersRouter
routes.use('/users', usersRouter) // rota com "/users" use as rotas de usersRouter

routes.use('/notes', notesRouter)

module.exports = routes