import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class='text-center'>
      <hr>
      <app-menu></app-menu>
      <p class="greyText">Copyright &copy; 2021 - Arun </p>
    </div>
  `,
  styles: [
    `
      .greyText{
        color: grey;
      }
    `
  ]
})
export class FooterComponent implements OnInit {


  

  constructor() { }

  ngOnInit(): void {
  }

}
