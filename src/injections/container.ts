import { Container } from 'inversify'
// import { Db, MongoClient } from 'mongodb'

import { IShowDAO } from '../dao/IShowDAO'
// import { ShowDAO } from '../dao/mongodb/ShowDAO'
import { ShowDAO } from '../dao/prisma/ShowDAO'
import { TYPES } from './types'
import { PrismaClient } from '@prisma/client'
import { IShowController } from '../controllers/IShowController'
import ShowController from '../controllers/ShowController'

export const getContainer = () => {
  const container = new Container()

  const client = new PrismaClient()
  container.bind<IShowDAO>(TYPES.IShowDAO).to(ShowDAO)
  container.bind<PrismaClient>(TYPES.DbConnector).toConstantValue(client)

  // const connection = await MongoClient.connect('mongodb://localhost')
  // const db = connection.db('showdb')
  // container.bind<Db>(TYPES.DbConnector).toConstantValue(db)

  // container.bind<IShowDAO>(TYPES.IUserDAO).to(ShowDAO)

  container.bind<IShowController>(TYPES.IShowController).to(ShowController)

  return container
}
