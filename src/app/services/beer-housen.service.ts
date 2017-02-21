import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Beer } from '../domain/beer';
import { LogServiceService } from './log-service.service';
import 'rxjs/add/operator/toPromise';
@Injectable()

export class BeerHousenService {
  private apiUrl = 'api/beersList';
  private beersList: Beer[] = [];

  constructor(private logService: LogServiceService, private http: Http) { }

  public getBeers(): Promise<Beer[]> {
    this.logService.write('операция получения данных');
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json().data)
      .then(beerList => this.beersList = beerList)
      .catch(this.handleError);
  }

  public addBeer(title: string, price: number) {
    this.beersList.push(new Beer(title, price));
    this.logService.write('операция добавления данных');
  }
  private handleError(error: any) {
    console.log('Error - ', error);
    return Promise.reject(error.message || error);
  }

}
