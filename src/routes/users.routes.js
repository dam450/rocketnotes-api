const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()


const usersController = new UsersController()

/*
  já tendo sido chamado pela rota '/users' de index.js
  a rota local precisa apenas de '/' pois
  já está dentro da rota 'users'
*/
usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', usersController.update)

/*
  module.exports
  exporta userRoutes para ser chamado em outro arquivo 
  como padrão. Neste exemplo é importado pelo 'index.js'
*/
module.exports = usersRoutes 