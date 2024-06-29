import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  register(user: any){
    localStorage.setItem('user', JSON.stringify(user))
    console.log(`usuario ${user.username} registrado`)
  }
}
