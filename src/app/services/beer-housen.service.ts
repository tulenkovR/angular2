import { Injectable } from '@angular/core';
import { Beer } from '../domain/beer';
import { LogServiceService } from './log-service.service';

@Injectable()

export class BeerHousenService {

  private beersList: Beer[] = [
    {
      title: 'Black djack',
      price: 123
    },
    {
      title: 'Ligth Xui',
      price: 345
    },
    {
      title: 'Ligth Red',
      price: 245
    }
  ];
  constructor(private logService: LogServiceService) { }

  public getBeers(): Beer[] {
    this.logService.write("операция получения данных");
    return this.beersList;
  }

  public addBeer(title: string, price: number) {
    this.beersList.push(new Beer(title, price));
    this.logService.write("операция добавления данных");
  }

}
