import { iDBComp } from '../sub-sistemas/ssDispatcher.js';

export class productosModel{

static async getProductos(){
    const query = `SELECT id_producto as id, nom_producto as nombre, precio, nom_proveedor as proveedor, nom_categoria as categoria, nom_marca as marca FROM producto pro 
    INNER JOIN proveedor pree ON pro.id_proveedor = pree.id_proveedor
    INNER JOIN categoria cat ON pro.id_categoria = cat.id_categoria
    INNER JOIN marca marc ON pro.id_marca = marc.id_marca`;
    const productos = await iDBComp.exeQuery({query});
    return productos;
}

    static async addProductos({nombre, precio, proveedor, marca, categoria}){
        console.log(proveedor, marca, categoria)
        const [{id_proveedor}] = await iDBComp.exeQuery({query: `SELECT id_proveedor FROM proveedor WHERE nom_proveedor = $1`, param: [proveedor]});
        const [{id_marca}] = await iDBComp.exeQuery({query: `SELECT id_marca FROM marca WHERE nom_marca = $1`, param: [marca]});
        const [{id_categoria}] = await iDBComp.exeQuery({query: `SELECT id_categoria FROM categoria WHERE nom_categoria = $1`, param: [categoria]});
        console.log(id_proveedor, id_marca, id_categoria)
        if(!id_proveedor || !id_marca || !id_categoria) throw new Error('Proveedor, marca o categoria no encontrados')
        const query = `INSERT INTO producto(nom_producto, precio, id_proveedor, id_marca, id_categoria) VALUES($1, $2, $3, $4, $5) RETURNING *`;
        const param = [nombre, precio, id_proveedor, id_marca, id_categoria];
        const producto = await iDBComp.exeQuery({query, param});
        return producto;
    }

    static async updateProducto({id, nombre, precio, proveedor, marca, categoria}){
        const [{id_proveedor}] = await iDBComp.exeQuery({query: `SELECT id_proveedor FROM proveedor WHERE nom_proveedor = $1`, param: [proveedor]});
        const [{id_marca}] = await iDBComp.exeQuery({query: `SELECT id_marca FROM marca WHERE nom_marca = $1`, param: [marca]});
        const [{id_categoria}] = await iDBComp.exeQuery({query: `SELECT id_categoria FROM categoria WHERE nom_categoria = $1`, param: [categoria]});
        const query = `UPDATE producto SET nom_producto = $1, precio = $2, id_proveedor = $3, id_marca = $4, id_categoria = $5 WHERE id_producto = $6 RETURNING *`;
        console.log(`id_proveedor: ${id_proveedor}, id_marca: ${id_marca}, id_categoria: ${id_categoria}`)
        const param = [nombre, precio, id_proveedor, id_marca, id_categoria, id];
        const producto = await iDBComp.exeQuery({query, param});
        return producto;
    }

    static async deleteProducto(id){
        const query = `DELETE FROM producto WHERE id = $1`;
        const param = [id];
        const producto = await iDBComp.exeQuery({query, param});
        return producto;
    }

    static async getProductoById(id){
        const query = `SELECT * FROM producto WHERE id = $1`;
        const param = [id];
        const producto = await iDBComp.exeQuery({query, param});
        return producto;
    }
}