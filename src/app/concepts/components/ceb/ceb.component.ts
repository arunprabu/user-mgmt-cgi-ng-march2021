import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb', 
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {
  
  // Step 1: Keep the data that has to be sent to the parent comp
  data = 'Arun';

  // Step 2: Creating eventemitter object
  @Output() profileLoaded = new EventEmitter(); // Step 3: Make it as custom event using @Output()

  constructor() { }

  ngOnInit(): void {
  }

  loadProfileHandler(event: any) {

    console.log(event);
    event.target.innerText = 'Loading Profile... Pls wait...';

    // mocking ajax call
    setTimeout( () => {
      // Step 4: Emit the event with the data
      this.profileLoaded.emit(this.data);
      event.target.innerText = 'Loaded Profile.. Check the Parent Comp';
    }, 5000);
  }

}


