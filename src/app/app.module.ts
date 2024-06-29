import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ModalProductoComponent } from './components/modal-producto/modal-producto.component';
import { ProductoService } from './services/producto.service';
import { SedesComponent } from './components/sedes/sedes.component';
import { ModalSedeComponent } from './components/modal-sede/modal-sede.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ModalInventarioComponent } from './components/modal-inventario/modal-inventario.component';
import { InventarioService } from './services/inventario.service';
import { SedeService } from './services/sede.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ModalProductoComponent,
    SedesComponent,
    ModalSedeComponent,
    InventarioComponent,
    ModalInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductoService, InventarioService, SedeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
