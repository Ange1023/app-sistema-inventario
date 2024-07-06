import { iDBComp } from "../sub-sistemas/ssDispatcher.js";

export class marcaModel{
    static async getMarcas(){
        try {
            const query = 'SELECT nom_marca FROM marca';
            const marcas = await iDBComp.exeQuery({query, param: []})
            return marcas
        } catch (error) {
            throw new Error(error.message)
        }
    }
}