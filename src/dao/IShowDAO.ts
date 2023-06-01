import { Show } from '../models/Show'
import { IGenericDAO } from './IGenericDAO'

export interface IShowDAO extends IGenericDAO<Show> {
  findByTitle(name: string): Promise<Show[]>
}
