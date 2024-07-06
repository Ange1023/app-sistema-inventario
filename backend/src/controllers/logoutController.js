import { iSessionComp } from "../../sub-sistemas/ssDispatcher.js";

export class logoutController{

    static async logoutController(req, res){
        if(req.session && req.session.username){
            const {mensaje} = await iSessionComp.closeSession(req, res);
            return res.status(200).json({message: mensaje});
        }
        return res.status(401).json({message: 'Usuario no autenticado'});
    }
}