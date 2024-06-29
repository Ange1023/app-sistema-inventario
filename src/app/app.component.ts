import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarSearchForm = false

  toggleSearchForm(){
    this.mostrarSearchForm = !this.mostrarSearchForm
  }

  title = 'proyecto-inventario';
}