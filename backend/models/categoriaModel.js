import { iDBComp } from "../sub-sistemas/ssDispatcher.js";

export class categoriaModel{
    static async getCategorias(){
        const query = 'SELECT nom_categorias FROM categorias';
        const categorias = await iDBComp.exeQuery({query, param: []})
        return categorias
    }
}