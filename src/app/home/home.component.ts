import { Component, OnInit } from '@angular/core';
import { BeerHousenService } from '../services/beer-housen.service';
import { Beer } from '../domain/beer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beersList: Beer[];

  constructor(private _service: BeerHousenService) {
    // this.beersList = this._service.getBeers();
  }
  ngOnInit() {
    this.beersList = this._service.getBeers();
  }
}
