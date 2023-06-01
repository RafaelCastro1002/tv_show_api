import { PrismaClient } from '@prisma/client'
import { inject, injectable } from 'inversify'

import { TYPES } from '../../injections/types'
import { Show } from '../../models/Show'
import { IShowDAO } from '../IShowDAO'
import { GenericDAO } from './GenericDAO'

@injectable()
export class ShowDAO extends GenericDAO<Show> implements IShowDAO {
  constructor(@inject(TYPES.DbConnector) client: PrismaClient) {
    super()
    /**
     * Aqui ocorre a injeção de dependência
     */
    this._model = client.show
  }

  // select * from user where lower(name) like lower('%dwight%')
  async findByTitle(title: string): Promise<Show[]> {
    const users = await this.find({
      title: {
        contains: title,
        mode: 'insensitive',
      },
    })

    return users
  }
}
