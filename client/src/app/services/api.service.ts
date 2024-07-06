import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, {username, password});
  }
  
  getProveedores(): Observable<any>{
    const url = `${this.baseUrl}/proveedor`;
    return this.http.get(url);
  }

  getCategorias(): Observable<any>{
    const url = `${this.baseUrl}/categoria`;
    return this.http.get(url);
  }

  getMarcas(): Observable<any>{
    const url = `${this.baseUrl}/marca`;
    return this.http.get(url);
  }

  getPaises(): Observable<any>{
    const url = `${this.baseUrl}/pais`;
    return this.http.get(url);
  }

  getProductos(): Observable<any>{
    const url = `${this.baseUrl}/productos`;
    console.log('en get productos')
    console.log(url)
    return this.http.get(url);
  }

  postProductos(producto: any): Observable<any>{
    const url = `${this.baseUrl}/productos`;
    console.log(url)
    console.log(producto)
    return this.http.post(url, producto);
  }

  updateProducto(producto: any): Observable<any>{
    const url = `${this.baseUrl}/productos`;
    return this.http.put(url, producto);
  }

  deleteProducto(id: number): Observable<any>{
    const url = `${this.baseUrl}/productos/${id}`;
    return this.http.delete(url);
  }
}
