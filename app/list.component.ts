import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Query } from './types';

@Component({
  selector: 'app-list',
  template: `
    <h3>Users</h3>
    <ul>
      <li *ngFor="let user of (users | async)">
        ID: {{ user.id }}
        Name: {{ user.name }}
        Email: {{ user.email }}
      </li>
    </ul>
  `
})
export class ListComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.users = this.apollo
      .watchQuery<Query>({
        query: gql`
          query users {
            users {
              id
              name
              email
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.users));
    this.users.subscribe(res => console.log(res[0]));
  }
}

// <app-upvoter [postId]="post.id"></app-upvoter>test
