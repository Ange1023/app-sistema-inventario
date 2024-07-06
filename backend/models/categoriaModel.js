import { iDBComp } from "../sub-sistemas/ssDispatcher.js";

export class categoriaModel{
    static async getCategorias(){
        const query = 'SELECT nom_categoria as categoria FROM categoria';
        const categorias = await iDBComp.exeQuery({query, param: []})
        // console.log(categorias)
        return categorias
    }
}