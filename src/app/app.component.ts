import { Component, OnInit } from '@angular/core';

import { BeerHousenService } from './services/beer-housen.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  beersList: any[];

  constructor(private _service: BeerHousenService) {
    // this.beersList = this._service.getBeers();
  }
  ngOnInit() {
    this.beersList = this._service.getBeers();
  }
}
