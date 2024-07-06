import { Injectable } from '@angular/core';
// import { invDB } from '../../utils/db';

export interface Producto {
  id: number;
  imagen?: string;
  nombre: string;
  marca: string;
  proveedor: string;
  precio: number;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productosKey = 'productos';

  constructor() { }

  getProductos(): Producto[] {
    const productos = localStorage.getItem(this.productosKey);
    return productos ? JSON.parse(productos) : [];
  }

  // getProductIdByName(name: any){
  //   const productos = this.getProductos();
  //   const productoId = productos.find(i => i.nombre === name)?.id;
  //   return productoId;
  // }

  // async getCategory(): Promise<Array<any>> {
  //   try {
  //     const result = await invDB.executeQuery({query: 'SELECT nom_categoria FROM categoria', params: []})
  //     return result
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async getMarca(): Promise<Array<any>> {
  //   try {
  //     const result = await invDB.executeQuery({query: 'SELECT nom_marca FROM marca', params: []})
  //     return result
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async getProveedor(): Promise<Array<any>> {
  //   try {
  //     const result = await invDB.executeQuery({query: 'SELECT nom_proveedor FROM proveedor', params: []})
  //     return result
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  addProducto(producto: Producto): void {
    const productos = this.getProductos();
    productos.push(producto);
    localStorage.setItem(this.productosKey, JSON.stringify(productos));
  }

  updateProducto(updatedProducto: Producto): void {
    const productos = this.getProductos();
    const i = productos.findIndex(p => p.id === updatedProducto.id);
    if (i !== -1) {
      productos[i] = updatedProducto;
      localStorage.setItem(this.productosKey, JSON.stringify(productos));
    }
  }

  deleteProducto(id: number): void {
    let productos = this.getProductos();
    productos = productos.filter(p => p.id !== id);
    localStorage.setItem(this.productosKey, JSON.stringify(productos));
  }
}