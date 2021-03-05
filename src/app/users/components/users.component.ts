import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: any[] = [];
  usersSubscription: Subscription = new Subscription();

  constructor( private userService: UserService ) {  // 1. connect to the service using dep injection
    console.log('Inside Constructor');
  }

  // LifeCycle Hook
  ngOnInit(): void { 
    // when the comp comes into the view this lifecycle hook will be executed.
    // ideal place for us to send ajax call
    console.log('Inside ngOnInit');

    // // 2. send the req to the service
    this.usersSubscription = this.userService.getUsers()
      .subscribe( (res: any[]) => { // 3. get the res from the service
        console.log(res);
        this.userList = res;
      });
  }

  ngOnDestroy(){
    // when the comp goes out of the view -- this will be called.
    // ideal place for you to unsubscribe, clear the data, clear intervals, clear timeouts
    console.log('Inside ngOnDestroy');
    this.usersSubscription.unsubscribe();
  }

}
