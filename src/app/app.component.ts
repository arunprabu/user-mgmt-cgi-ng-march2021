import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // exposed in a tag -- mandatory
  templateUrl: './app.component.html', // html -- mandatory -- should be only one
  styleUrls: ['./app.component.css', ] // css -- optional -- can be multiple 
})
export class AppComponent {
  // ts 

  title = 'user-mgmt-cgi-ng-march2021';
}
