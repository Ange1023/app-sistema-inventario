import { Router } from "express";
import { loginController } from "../controllers/loginController.js";

export const loginRouter = Router();

loginRouter.post('/', loginController.loginUser);
loginRouter.get('/', loginController.getLoggedUser);