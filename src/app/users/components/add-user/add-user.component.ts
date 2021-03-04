import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  isSaved = false;

  // Step 1:  Have TS equivalent for the HTML form tag 
  addUserForm: FormGroup = new FormGroup({
    // Step 2: Have TS equivalents for the input fields 
    name: new FormControl('arun', Validators.required),
    phone: new FormControl('123242', Validators.required), // TODO: Allow max length of 10
    email: new FormControl('a@b.com', [ Validators.required, Validators.email ])
    // Refer HTML for Step 3
  });

  constructor( private userService: UserService) {  // 1. connect with service using dependency injection

  }

  ngOnInit(): void {
    
  }

  handleAddUserSubmit(){
    console.log(this.addUserForm.value);

    // 2. send the above data to the service
    this.userService.createUser(this.addUserForm.value)
      .subscribe( (res: any) => { // 3. get the res from the service
        console.log(res);
        if(res && res.id){
          this.isSaved = true;
        }
      });    
  }

}
