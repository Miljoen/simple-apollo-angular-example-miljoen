import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Query } from './types';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let post of (posts | async)">
        {{ post.title }} by {{ post.author.firstName }}
        {{ post.author.lastName }} ({{ post.votes }} votes)
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
              name
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.users));
    this.users.subscribe(res => console.log(res[0]));
  }
}

// <app-upvoter [postId]="post.id"></app-upvoter>test
