import { Router } from "express";
import { productosController } from "../controllers/productosController";

export const productosRouter = Router();

productosRouter.post('/', productosController.productosPost);
productosRouter.get('/:id', productosController.productosGetDetail);