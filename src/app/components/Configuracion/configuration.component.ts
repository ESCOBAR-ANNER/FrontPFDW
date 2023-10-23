import { Component } from '@angular/core';
import { GetUsersService } from '../../services/get-users.service'

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styles: [
  ]
})
export class ConfigurationComponent {

  users = [{
    name:"",
    email:"",
    password:"",
    date:"",
    address:"",
    phone:"",
    photo:"",

  }];
  constructor(private getUserService: GetUsersService) { }

  ngOnInit() {
    this.getUserService.getPrivateUsers()
      .subscribe(
        res => {
          console.log(res)
          this.users = res;
        }
      )
  }


}
