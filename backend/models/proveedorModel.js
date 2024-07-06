import { iDBComp } from "../sub-sistemas/ssDispatcher.js";
export class proveedorModel{
    static async getProveedores(){
        const query = 'SELECT nom_proveedor proveedor FROM proveedor';
        const proveedores = await iDBComp.exeQuery({query, param: []})
        // console.log(proveedores)
        return proveedores
    }
}