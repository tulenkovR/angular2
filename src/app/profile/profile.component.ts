import { GithubService } from './../service/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _github: GithubService) {
    this._github.getUser().subscribe(user => {
        console.log(user);
    });
  }

  ngOnInit() {
  }

}
