import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: creating custom property 
  @Input() age  = 0; // @Input() will make a variable as custom property

  constructor() { }

  ngOnInit(): void {
  }

}
