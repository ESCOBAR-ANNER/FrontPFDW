import { Component } from '@angular/core';
import { GetUsersService } from 'src/app/services/get-users.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: [
  ]
})
export class EquipoComponent {

  users = [{
    name:"",
    date:"",
  }];
  constructor(private getUserService: GetUsersService) { }

  ngOnInit() {
    this.getUserService.getUsers()
      .subscribe(
        res => {
          console.log(res)
          this.users = res;
        }
      )
  }


}
