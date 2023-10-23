import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: [
  ]
})
export class RegistroComponent {

  user = {
    name: '',
    email: '',
    password: '',
    date: '',
    phone: '',
    address: '',
    photo: ''
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }


  register() {
    this.authService.register(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private-users']);
        },
        err => console.log(err)
      )
  }

}

