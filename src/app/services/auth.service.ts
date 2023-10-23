import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000/api';
  
  constructor(
    private http: HttpClient,
    private router: Router) { }

  register(user: any) {
    return this.http.post<any>(this.URL + '/register', user);
  }

  login(user: any) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  logueado(){
    if(localStorage.getItem('token')){
    return true;
    }else{
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  salir(){
    localStorage.removeItem("token");
    this.router.navigate(['/login'])
  }

}
