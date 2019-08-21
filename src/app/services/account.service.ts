import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor() { }


    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, stauts: string){
    this.accounts.push({name: name, status: status});
  }

  udateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }



}