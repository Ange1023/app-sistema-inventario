import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent implements OnChanges {
  @Input() producto: any; 
  @Output() closed = new EventEmitter<boolean>(); 
  showModal = false;
  form: any = { 
    id: null,
    nombre: '',
    marca: '',
    proveedor: '',
    precio: null,
    categoria: ''
  };

  constructor(private productoService: ProductoService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['producto'] && changes['producto'].currentValue) {
      this.showModal = true;
      this.form = { ...changes['producto'].currentValue };
    } else {
      this.showModal = true;
      this.form = {
        id: this.productoService.getProductos().length,
        nombre: '',
        marca: '',
        proveedor: '',
        precio: null,
        categoria: ''
      };
    }
  }
  onFileChange(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.imagen = reader.result as string;
      };
    }
  }
  submitForm() {
    if (this.producto) {
      this.productoService.updateProducto(this.form);
    } else {
      this.productoService.addProducto(this.form);
    }
    this.closed.emit(true); 
    this.showModal = false;
  }

  onClose() { 
    this.closed.emit(false); 
    this.showModal = false;
  }
}
