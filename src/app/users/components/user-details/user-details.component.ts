import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  userData: any;
  dupUserData: any;

  constructor( private userService: UserService, private route: ActivatedRoute ) { 
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // read the URL param
    const userId = this.route.snapshot.paramMap.get('id') as string;
    
    this.userService.getUserById(userId)
      .subscribe( (res: any) => {
        console.log(res);
        this.userData = res;
      });
  }

  editModalOpenHandler(){
    this.dupUserData =  { ...this.userData } ;
  }

  async updateUserHandler(formData: NgForm){
    console.log(formData);  // for further validation use this.

    let status = await this.userService.updateUser(this.dupUserData);
    console.log(status);

  }

}
