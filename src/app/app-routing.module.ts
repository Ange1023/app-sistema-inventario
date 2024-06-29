import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'sedes', component: SedesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
