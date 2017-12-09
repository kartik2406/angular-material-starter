import { Injectable } from '@angular/core';
import { User } from './../models/user';

@Injectable()
export class UserDataService {

  constructor() { }

  getUsers(): User[] {

    return [
      { firstName: 'John', lastName: 'Doe', age: 30 },
      { firstName: 'Gina', lastName: 'Doe', age: 20 },
      { firstName: 'Diana', lastName: 'Doe', age: 28 },
      { firstName: 'Bruce', lastName: 'Wayne', age: 35 },
      { firstName: 'Oliver', lastName: 'Queen', age: 30 },
      { firstName: 'Ras', lastName: 'al Gul', age: 100 },
      { firstName: 'Barry', lastName: 'Allen', age: 28 },
      { firstName: 'Clark', lastName: 'Kent', age: 34 },
      { firstName: 'Kara', lastName: 'Danvers', age: 26 },
      { firstName: 'Alex', lastName: 'Danvers', age: 27 },
      { firstName: 'Jon', lastName: 'Snow', age: 29 },
    ]
  }

}
