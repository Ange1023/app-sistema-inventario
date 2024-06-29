import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: any = {
    username: '',
    password: ''
  }

  constructor(private UsuarioService: UsuarioService, private router: Router){}

  submitRegisterForm(){
    this.UsuarioService.register(this.registerForm)

    this.router.navigate(['/'])
  }

}
