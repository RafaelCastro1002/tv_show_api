import 'reflect-metadata'

import express from 'express'
import bodyParser from 'body-parser'

import { showsRouter } from './routes/shows'

const PORT = 3000 

const createApp = () => {
  const app = express()

  app.use(bodyParser.json())

  app.use('/shows', showsRouter)

  const server = app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`)})

  process.on('SIGINT', () => {
    server.close()
    console.log('Server closed')
  })
}

createApp()