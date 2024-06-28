import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ModalProductoComponent } from './modal-producto/modal-producto.component';
import { ProductoService } from './services/producto.service';
import { SedesComponent } from './sedes/sedes.component';
import { ModalSedeComponent } from './modal-sede/modal-sede.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ModalProductoComponent,
    SedesComponent,
    ModalSedeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
