import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
  ]
})
export class LoginComponent {

  user = {
    email: "",
    password: ""
  }

  errorModalVisible = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService) { }


  login() {
    this.authService.login(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private-users'])
        },
        err => {
        console.log(err);
        this.errorMessage = 'Datos incorrectos. Por favor, inténtalo de nuevo.';
        this.errorModalVisible = true;
        this.user = {email:'', password:''};
        }
      )
  }

  closeErrorModal() {
    this.errorModalVisible = false;
  }
}
