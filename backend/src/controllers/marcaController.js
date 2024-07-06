import { marcaModel } from "../../models/marcaModel.js";

export class marcaController{

    static async getMarcasController(req, res){
        try {
            const marcas = await marcaModel.getMarcas()
            res.json(marcas)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}