import { productosModel } from "../../models/productosModel.js";

export class productosController{


    static async productosPost(req, res){
        const {nombre, precio, proveedor, marca, categoria} = req.body;
        console.log(req.body)
        const producto = await productosModel.addProductos({nombre, precio, proveedor, marca, categoria});
        if(!producto) return res.status(400).json({message: 'Error al agregar producto'})
        return res.status(200).json(producto);
    }

    static async productosGetDetail(req, res){
        const {id} = req.body;
        const producto = await productosModel.getProductoById(id);
        res.status(200).json(producto);
    }

    static async productosGet(req, res){
        const productos = await productosModel.getProductos();
        res.status(200).json(productos);
    }

    static async deleteProducto(req, res){
        const {id} = req.body;
        const producto = await productosModel.deleteProducto(id);
        return res.status(200).json(producto);
    }

    static async updateProducto(req, res){
        const {id, nombre, precio, proveedor, marca, categoria} = req.body;
        const producto = await productosModel.updateProducto({id, nombre, precio, proveedor, marca, categoria});
        res.status(200).json(producto);
    }
    
}