const { Router } = require('express') // requisita a lib express

const usersRouter = require('./users.routes') // requisita o arquivo de rotas do usuário
const notesRouter = require('./notes.routes')
const tagsRouter  = require('./tags.routes')

const routes = Router() 

//routes recebe as rotas 
routes.use('/users', usersRouter) // rota com "/users" use as rotas de usersRouter
routes.use('/notes', notesRouter) // rota com "/notes" use as rotas de notesRouter
routes.use('/tags', tagsRouter)   // rota com "/tags" use as rotas de tagsRouter

module.exports = routes