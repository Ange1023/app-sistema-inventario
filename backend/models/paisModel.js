import { iDBComp } from "../sub-sistemas/ssDispatcher.js";

export class paisModel{
    static async getPaises(){
        const query = 'SELECT nom_pais FROM paises';
        const paises = await iDBComp.exeQuery({query, param: []})
        return paises
    }
}