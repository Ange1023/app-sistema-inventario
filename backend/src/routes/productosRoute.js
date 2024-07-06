import { Router } from "express";
import { productosController } from "../controllers/productosController.js";

export const productosRouter = Router();

productosRouter.post('/', productosController.productosPost);
productosRouter.get('/:id', productosController.productosGetDetail);
productosRouter.delete('/', productosController.deleteProducto);
productosRouter.get('/', productosController.productosGet);