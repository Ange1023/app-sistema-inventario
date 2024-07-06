import { productosModel } from "../../models/productosModel";

export class productosController{


    static async productosPost(req, res){
        const {nombre, precio, proveedor, marca, categoria} = req.body;
        const producto = await productosModel.addProductos({nombre, precio, proveedor, marca, categoria});
        res.status(200).json(producto);
    }

    static async productosGetDetail(req, res){
        const {id} = req.params;
        const producto = await productosModel.getProductoById(id);
        res.status(200).json(producto);
    }

    static async productosGet(req, res){
        const productos = await productosModel.getProductos();
        res.status(200).json(productos);
    }

    static async deleteProducto(req, res){
        const {id} = req.params;
        const producto = await productosModel.deleteProducto(id);
        res.status(200).json(producto);
    }
}