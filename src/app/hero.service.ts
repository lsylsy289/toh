import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

// Angular Container Register, provider is decision.
@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
