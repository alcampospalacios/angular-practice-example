import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getExecuteChef(): Leader {    
    return LEADERS.filter((leader) => (leader.designation === 'Executive Chef'))[0];
  }
}
