import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  isLoggedIn: string = 'false';
  private authSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.authSubscription = this.authService.getLoggedInStatus().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn ? 'true' : 'false';
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  title = 'proyecto-inventario';
}