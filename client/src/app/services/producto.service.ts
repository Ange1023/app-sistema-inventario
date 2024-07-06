import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
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

  constructor(private apiService: ApiService) { }


  getProductos(): Observable<Producto[]> {
    const productos = this.apiService.getProductos();
    return productos;
  }

  addProducto(producto: Producto): Observable<any> {
    console.log('holi')
    return this.apiService.postProductos(producto);
  }

  updateProducto(updatedProducto: Producto): Observable<any> {
    return this.apiService.updateProducto(updatedProducto);
  }

  deleteProducto(id: number): Observable<any> {

    return this.apiService.deleteProducto(id);
  }
}