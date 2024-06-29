import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { InventarioComponent } from './components/inventario/inventario.component';


const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'sedes', component: SedesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
