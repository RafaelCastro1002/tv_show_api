import { Router } from "express";
import { getContainer } from "../injections/container";
import { IShowController } from "../controllers/IShowController";
import { TYPES } from "../injections/types";

export const showsRouter = Router()
const container = getContainer()
const showCtrl = container.get<IShowController>(TYPES.IShowController)

showsRouter.post('/', (req, res) => showCtrl.store(req, res))

showsRouter.get('/:title', (req, res) => showCtrl.indexByTitle(req, res))