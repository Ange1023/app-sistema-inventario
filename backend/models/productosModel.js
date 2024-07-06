import { iDBComp } from '../sub-sistemas/ssDispatcher.js.js';

export class productosModel{

    async getProductos(){
        const query = `SELECT * FROM producto`;
        const productos = await this.iDBComp.exeQuery({query});
        return productos;
    }

    async addProductos({nombre, precio, proveedor, marca, categoria}){
        const {id_proveedor} = await this.iDBComp.exeQuery({query: `SELECT id_proveedor FROM proveedore WHERE nom_proveedor = $1`, param: [proveedor]});
        const {id_marca} = await this.iDBComp.exeQuery({query: `SELECT id_marca FROM marca WHERE nom_marca = $1`, param: [marca]});
        const {id_categoria} = await this.iDBComp.exeQuery({query: `SELECT id_categoria FROM categoria WHERE nom_categoria = $1`, param: [categoria]});
        const query = `INSERT INTO producto(nom_producto, precio, id_proveedor, id_marca, id_categoria) VALUES($1, $2, $3, $4, $5) RETURNING *`;
        const param = [nombre, precio, id_proveedor, id_marca, id_categoria];
        const producto = await this.iDBComp.exeQuery({query, param});
        return producto;
    }

    async updateProducto({id, nombre, precio, proveedor, marca, categoria}){
        const {id_proveedor} = await this.iDBComp.exeQuery({query: `SELECT id_proveedor FROM proveedore WHERE nom_proveedor = $1`, param: [proveedor]});
        const {id_marca} = await this.iDBComp.exeQuery({query: `SELECT id_marca FROM marca WHERE nom_marca = $1`, param: [marca]});
        const {id_categoria} = await this.iDBComp.exeQuery({query: `SELECT id_categoria FROM categoria WHERE nom_categoria = $1`, param: [categoria]});
        const query = `UPDATE producto SET nom_producto = $1, precio = $2, id_proveedor = $3, id_marca = $4, id_categoria = $5 WHERE id = $6 RETURNING *`;
        const param = [nombre, precio, id_proveedor, id_marca, id_categoria, id];
        const producto = await this.iDBComp.exeQuery({query, param});
        return producto;
    }

    async deleteProducto(id){
        const query = `DELETE FROM producto WHERE id = $1`;
        const param = [id];
        const producto = await this.iDBComp.exeQuery({query, param});
        return producto;
    }

    async getProductoById(id){
        const query = `SELECT * FROM producto WHERE id = $1`;
        const param = [id];
        const producto = await this.iDBComp.exeQuery({query, param});
        return producto;
    }
}