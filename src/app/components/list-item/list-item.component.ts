import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { PipeLifetime, Query } from '../../types/types';

const typeQueryGetAll = gql`
  query getAll {
    getAll {
      id
      platform
      well
      riserSetNumber
      supplier
      section
      func
      lifeLength
      reference
      pshh
    }
  }
`;

const typeQueryGetByLimit = gql`
  query getAllByLimit($count: Int!) {
    getAllByLimit {
      id
      platform
      well
      riserSetNumber
      supplier
      section
      func
      lifeLength
      reference
      pshh
    }
  }
`;

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnDestroy {

  loading: boolean
  pipe: PipeLifetime
  pipelifetimes: PipeLifetime[]

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    this.querySubscription = this.apollo.watchQuery<Query>({
      query: typeQueryGetAll,
      variables: {
        // count: 2,
      }
    })
    .valueChanges
    .subscribe(result => {
      this.loading = result.loading;
      console.log('result', result)
      this.pipelifetimes = result.data.getAll;
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

}
