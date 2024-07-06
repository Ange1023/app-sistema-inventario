import { Router } from "express";
import { paisController } from "../controllers/paisController.js";

export const paisRouter = Router()

paisRouter.get('/', paisController.getPaisesController)
