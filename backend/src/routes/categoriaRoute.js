import { Router } from "express";
import { categoriaController } from "../controllers/categoriaController.js";

export const categoriaRouter = Router();

categoriaRouter.get('/', categoriaController.getCategoriasController)