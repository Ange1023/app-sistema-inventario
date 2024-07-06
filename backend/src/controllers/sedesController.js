import { sedesModel } from "../../models/sedesModel";

export class sedesController{
    static async sedesGet(req, res){
        const sedes = await sedesModel.getSedes();
        res.status(200).json(sedes);
    }

    static async sedesGetDetail(req, res){
        const {id} = req.body;
        const sede = await sedesModel.getSedeById(id);
        res.status(200).json(sede);
    }

    static async sedesPost(req, res){
        const {nombre, direccion, pais} = req.body;
        const sede = await sedesModel.createSede({nombre, direccion, pais});
        res.status(200).json(sede);
    }

    static async deleteSede(req, res){
        const {id} = req.body;
        const sede = await sedesModel.deleteSede(id);
        res.status(200).json(sede);
    }
}