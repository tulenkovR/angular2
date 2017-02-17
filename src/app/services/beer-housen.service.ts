import { Injectable } from '@angular/core';

@Injectable()
export class BeerHousenService {
  private beersList: any[] = [
    {
      title: "Black djack",
      price: 123
    },
    {
      title: "Ligth Xui",
      price: 345
    },
    {
      title: "Ligth Red",
      price: 245
    }
  ];

  public getBeers(): any[] {
    return this.beersList;
  }

  constructor() { }

}
