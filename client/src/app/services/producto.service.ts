import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { firstValueFrom, Observable } from 'rxjs';
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

  async addProducto(producto: Producto): Promise<any> {
    console.log('holi')
    return await this.apiService.postProductos(producto);
  }

  async updateProducto(updatedProducto: Producto): Promise<any> {
    const a = await this.apiService.updateProducto(updatedProducto);
    console.log(a)
    return a
  }

  deleteProducto(id: number): Observable<any> {

    return this.apiService.deleteProducto(id);
  }
}