import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private apiService: ApiService) { }

  login(username: string, password: string): Observable<any> {
    console.log('login de auth service')
    return new Observable(observer => {
      console.log('en observer')
      this.apiService.login(username, password).subscribe({
        next: (response: any) => {
          console.log('estoy en next')
          
          // Aquí puedes verificar la respuesta del servidor para determinar si el inicio de sesión fue exitoso
          // Por ejemplo, si el servidor devuelve un token o un indicador de éxito
          if (response.user) {
            console.log('respuesta exitosa')
            this.loggedIn.next(true);
            observer.next(true);
            observer.complete();
          } else {
            observer.error(new Error('Failed to log in'));
          }
        },
        error: (err: any) => {
          observer.error(err);
        }
      });
    });
  }

  logout(): void {
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
