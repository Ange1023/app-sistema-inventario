import { Router } from "express";
import { proveedorController } from "../controllers/proveedorController.js";

export const proveedorRouter = Router();
proveedorRouter.get('/', proveedorController.getProveedoresController)