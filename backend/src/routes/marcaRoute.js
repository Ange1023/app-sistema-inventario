import { Router } from "express";
import { marcaController } from '../controllers/marcaController.js';

export const marcaRouter = Router();
marcaRouter.get('/', marcaController.getMarcasController);