import { inject, injectable } from "inversify";
import { IShowDAO } from "../dao/IShowDAO";
import { TYPES } from "../injections/types";
import { Request, Response } from "express";
import { validateEntryStoreShow } from "../validations/show";
import { Show } from "../models/Show";

@injectable()
export default class ShowController {
    dao: IShowDAO

    constructor(@inject(TYPES.IShowDAO) dao: IShowDAO) {
        this.dao = dao
    }
    
    async store (req: Request, res: Response) {
        const { body } = req
        try {
            validateEntryStoreShow(body)

            const show = new Show(body)

            const showId = await this.dao.create(show)

            return res.status(201).json({
                id: showId
            })
        } catch (error) {
            return res.status(400).json({
                error: error.message
            })
        }
    }

    async indexByTitle (req: Request, res: Response) {
        const { title } = req.params

        const shows = await this.dao.findByTitle(title)

        return res.status(200).json({ shows })
    }
}