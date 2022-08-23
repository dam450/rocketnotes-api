const migrationsRun = require("./database/sqlite/migrations")

require("express-async-errors")
/*
importamos express-async-errors para tratamento assíncrono 
dos erros disparados na aplicação */
const AppError = require('./utils/AppError')

const express = require("express") // requisita o express

/* requisita as rotas que estão no index.js 
como foi passado a pasta sem indicar o arquivo
é usado o index por padrão */
const routes = require('./routes') 

const app = express()
app.use(express.json())

app.use(routes) // use (recebe) as rotas que estão em routes (index.js)

migrationsRun() // inicializa o banco de dados, se não existir será criado

app.use( ( error,  request, response, next ) => {

  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})



const PORT = 3333

app.listen(PORT, () => {
  console.info(`[Server] is listening on port ${PORT}  📌`)
})