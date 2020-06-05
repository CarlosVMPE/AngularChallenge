import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CocktaildbService } from './services/cocktaildb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(public router: Router, public cocktaildbservice: CocktaildbService){}

  showCategories(cat: string){
    this.cocktaildbservice.setListDrinks([]);
    this.router.navigate(['/type-drinks', cat]);
  }

}
