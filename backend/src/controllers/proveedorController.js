import { iDBComp } from "../../sub-sistemas/ssDispatcher.js";
import { proveedorModel } from "../../models/proveedorModel.js";

export class proveedorController{
    static async getProveedoresController(req, res){
        try {
            const proveedores = await proveedorModel.getProveedores()
            res.json(proveedores)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}