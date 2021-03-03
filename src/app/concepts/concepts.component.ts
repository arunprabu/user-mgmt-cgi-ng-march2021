import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation
  appName = 'User Management App!';

  // prop binding
  companyName = 'CGI';

  courseName = 'Angular 11';
  
  // Data to be sent to Child comp -- For CPB
  myAge = 20;

  dataReceivedFromChildComp = '';

  // Structural Directive releted
  isLoggedIn = true;
  skillList: Array<string> = [
    'Angular', 'NodeJS', 'React JS'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // event binding
  clickMeHandler(event: any){
    console.log(event);
    alert('clicked');
  }

  profileLoadedHandler(event: any){
    // Step 6: Get the data from child comp using event
    console.log(event);
    this.dataReceivedFromChildComp = event;

  }
}
