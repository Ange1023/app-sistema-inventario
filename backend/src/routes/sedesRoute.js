import { Router } from "express";
import { sedesController } from "../controllers/sedesController.js";

export const sedesRouter = Router();

sedesRouter.get('/', sedesController.sedesGet);
sedesRouter.get('/:id', sedesController.sedesGetDetail);
sedesRouter.post('/', sedesController.sedesPost);
sedesRouter.delete('/', sedesController.deleteSede);