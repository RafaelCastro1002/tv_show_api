import { Request, Response } from "express";

export interface IShowController {
    store (req: Request, res: Response): Promise<Response>
    indexByTitle (req: Request, res: Response): Promise<Response>
}