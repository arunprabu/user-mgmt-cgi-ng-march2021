import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  userList: any[] = [];

  constructor( private userService: UserService ) {  // 1. connect to the service using dep injection
    console.log('Inside Constructor');
  }

  // LifeCycle Hook
  ngOnInit(): void { 
    // when the comp comes into the view this lifecycle hook will be executed.
    // ideal place for us to send ajax call
    console.log('Inside ngOnInit');

    // 2. send the req to the service
    this.userService.getUsers()
      .subscribe( (res: any[]) => { // 3. get the res from the service
        console.log(res);
        this.userList = res;
      });

  }

}
