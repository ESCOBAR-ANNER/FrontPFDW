
import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { AuthService } from "./services/auth.service"

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }


  canActivate(): boolean {
    if (this.authservice.logueado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
