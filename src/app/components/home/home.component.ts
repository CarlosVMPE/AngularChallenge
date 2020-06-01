import { Component, OnInit } from '@angular/core';
import { CocktaildbService } from '../../services/cocktaildb.service';
import { Drink } from '../../interfaces/drink.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  drinks: Drink[] = [];

  constructor(private cocktaildbservice: CocktaildbService) { }

  ngOnInit() {
    this.getRandomDrinks();
    this.cocktaildbservice.setCategoryDrinks('random');
  }

  getRandomDrinks(){
    this.cocktaildbservice.getRandomDrink().subscribe((res: any) => {
      if(res && res.drinks){
        this.drinks = res.drinks;
      }
    });
  }

}
