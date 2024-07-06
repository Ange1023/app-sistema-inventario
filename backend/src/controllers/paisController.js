import { paisModel } from "../../models/paisModel.js";

export class paisController{
    static async getPaisesController(req, res){
        try {
            const paises = await paisModel.getPaises()
            res.json(paises)
        } catch (error) {
            res.status(500).json({error: error.message})
    }
}
}