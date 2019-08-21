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

  }

  udateStatus(id: number, status: string){
    
  }



}