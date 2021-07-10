import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      {username: 'ArastooGhodsi', email: 'arastoo.ghodsi.ai@gmail.com', phone: '09188198549', password: '123'},
      {username: 'FatemehPiri', email: 'f.piri89@gmail.com', phone: '09375383343', password: '456'},
      {username: 'ParastooGhodsi', email: 'p.ghodsi@gmail.com', phone: '09190228831', password: '789'},
      {username: 'MehdiRasoli', email: 'm.rasoli@gmail.com', phone: '09151028938', password: '147'}
    ];
    return {users};
  }

  
}
