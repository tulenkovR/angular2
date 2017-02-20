import { GithubService } from './../service/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  user: any;
  repos: any[];
  username: string;
  followers: any[];

  constructor(private _github: GithubService) {
    this.user = false;
  }

  ngOnInit() {
  }

  searchUser() {
    this._github.updateUsers(this.username);

    this._github.getUser().subscribe(user => {
      this.user = user;
    });

    this._github.getRepos().subscribe(repos => {
      this.repos = repos;
    });

    this._github.getFollowers().subscribe(followers => {
      this.followers = followers;
    });
  }

}
