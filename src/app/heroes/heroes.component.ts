import {Component, OnInit} from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(public heroService: HeroService) {
    // this.heroes = HEROES;
    // this.heroes = new Hero(1, 'Win storm');
  }

  ngOnInit() {
    // 비동기 처리
    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
