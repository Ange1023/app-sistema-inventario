import { iDBComp } from "../sub-sistemas/ssDispatcher.js";
export class proveedorModel{
    static async getProveedores(){
        const query = 'SELECT nom_proveedor FROM proveedor';
        const proveedores = await iDBComp.exeQuery({query, param: []})
        return proveedores
    }
}