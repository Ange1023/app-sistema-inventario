import { iDBComp } from "../../sub-sistemas/ssDispatcher.js";
import { iSessionComp } from "../../sub-sistemas/ssDispatcher.js";
import { userModel } from "../../models/userModel";

export class loginController{

    static async loginUser(req, res){
        const {username, password} = req.body
        const validUser = await userModel.verifyUser({username, password});
        if(!validUser) return res.status(401).json({message: 'Credenciales incorrectas'});
        await iSessionComp.createSession({username});
        res.status(200).json({message: 'Usuario autenticado'});
    }

    static async getLoggedUser(req, res){
        const username = req.session.username;
        if(!username) return res.status(401).json({message: 'Usuario no autenticado'});
        res.status(200).json({username});
    }
}