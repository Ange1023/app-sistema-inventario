import { iDBComp } from "../../sub-sistemas/ssDispatcher.js";
import { iSessionComp } from "../../sub-sistemas/ssDispatcher.js";
import { userModel } from "../../models/userModel.js";

export class loginController{

    static async loginUser(req, res){
        const {username, password} = req.body
        console.log(req.body)
        if(!username || !password) return res.status(400).json({message: 'Faltan datos'});
        if(req.session && req.session.username) return res.status(400).json({message: 'Usuario ya autenticado'});
        const validUser = await userModel.verifyUser({username, password});
        if(!validUser) return res.status(401).json({message: 'Credenciales incorrectas'});
        await iSessionComp.createSession(req);
        res.status(200).json({message: 'Usuario autenticado', user: req.session.username});
    }

    static async getLoggedUser(req, res){
        const username = req.session.username;
        if(!username) return res.status(401).json({message: 'Usuario no autenticado'});
        res.status(200).json({username});
    }
}