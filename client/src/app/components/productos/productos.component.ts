import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = []; 
  selectedProducto: any = null; 
  showModal = false;

  constructor(private productoService: ProductoService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProductos().subscribe(
      (data) => {
        this.productos = data;
        console.log(this.productos)
      },
      (error) => {
        console.error('Error al obtener categorías', error);
      }
    )
  }

  openModal(): void {
    this.selectedProducto = null;
    this.showModal = true;
  }

  closeModal(event: boolean): void {
    if (event) {
      this.apiService.getProductos().subscribe(
        (data) => {
          this.productos = data;
        },
        (error) => {
          console.error('Error al obtener productos', error);
        }
      );
    }
    this.showModal = false; 
  }

  editProducto(producto: any): void {
    this.selectedProducto = producto;
    this.showModal = true;
  }

  deleteProducto(id: number): void { 
    this.productoService.deleteProducto(id);
    this.productos = this.productoService.getProductos();
  }
}
