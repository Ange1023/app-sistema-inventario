import { categoriaModel } from "../../models/categoriaModel.js";

export class categoriaController{
    static async getCategoriasController(req, res){
        try {
            const categorias = await categoriaModel.getCategorias()
            res.json(categorias)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}