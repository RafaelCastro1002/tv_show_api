import { inject, injectable } from 'inversify'
import { Db } from 'mongodb'

import { TYPES } from '../../injections/types'
import { Show } from '../../models/Show'
import { IShowDAO } from '../IShowDAO'
import { GenericDAO } from './GenericDAO'

@injectable()
export class ShowDAO extends GenericDAO<Show> implements IShowDAO {
  constructor(@inject(TYPES.DbConnector) db: Db) {
    super()
    this._collection = db.collection('shows')
  }

  async findByTitle(title: string): Promise<Show[]> {
    const shows = await this.find({
      title: {
        $regex: title,
        $options: 'i',
      },
    })

    return shows
  }
}
