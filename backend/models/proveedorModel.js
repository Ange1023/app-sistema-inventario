import { iDBComp } from "../sub-sistemas/ssDispatcher.js";
export class proveedorModel{
    static async getProveedores(){
        const query = 'SELECT nom_proveedores FROM proveedores';
        const proveedores = await iDBComp.exeQuery({query, param: []})
        return proveedores
    }
}