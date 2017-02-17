import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  branding: string = 'Angular 2 One Learn';
  constructor() { }

  ngOnInit() {
  }

}
