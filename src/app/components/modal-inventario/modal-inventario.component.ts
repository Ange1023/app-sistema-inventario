import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';
import { Producto, ProductoService } from '../../services/producto.service';
import { InventarioItem } from '../../services/inventario.service';

@Component({
  selector: 'app-modal-inventario',
  templateUrl: './modal-inventario.component.html',
  styleUrls: ['./modal-inventario.component.css']
})
export class ModalInventarioComponent implements OnChanges {
  @Input() inventarioItem: InventarioItem | null = null;
  @Input() sedeId: number = 0;
  @Output() closed = new EventEmitter<boolean>();
  showModal = false;
  form: InventarioItem = {
    id: Math.floor(Math.random() * 10000),
    sedeId: this.sedeId,
    productoId: 0,
    stock: 0,
    reorderPoint: 0
  };
  productos: Producto[] = [];
  constructor(private inventarioService: InventarioService, private productoService: ProductoService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.productos = this.productoService.getProductos();
    if (changes['inventarioItem'] && changes['inventarioItem'].currentValue) {
      this.showModal = true;
      this.form = { ...changes['inventarioItem'].currentValue };
    } else {
      this.showModal = true;
      this.form = {
        id: Math.floor(Math.random() * 10000),
        sedeId: this.sedeId,
        productoId: this.productos.length ? this.productos[0].id : 0,
        stock: 0,
        reorderPoint: 0
      };
    }
  }

  submitForm() {
    if (this.inventarioItem) {
      this.inventarioService.updateInventario(this.form);
    } else {
      this.inventarioService.addInventario(this.form);
    }
    this.closed.emit(true);
    this.showModal = false;
  }

  close() {
    this.closed.emit(false);
    this.showModal = false;
  }
}
