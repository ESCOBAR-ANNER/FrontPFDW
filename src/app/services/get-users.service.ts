import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  private URL = 'http://localhost:4000/api'

  constructor(private http : HttpClient) { }

getUsers(){
  return this.http.get<any>(this.URL + '/users')
}

getPrivateUsers(){
  return this.http.get<any>(this.URL + '/private-users')
}
}

