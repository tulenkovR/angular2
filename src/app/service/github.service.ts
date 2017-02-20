import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '9cbea95e3d38d8832876';
  private client_secret = '2cff73ab56b3623b79e6d8f0436ab0b6b398eeb7';

  constructor(private _http: Http) {
    console.log('GitHub service okay');
  }

  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUsers(username: string) {
    this.username = username;
  }
}
