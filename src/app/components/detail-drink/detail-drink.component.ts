import { Component, OnInit } from '@angular/core';
import { Drink } from '../../interfaces/drink.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktaildbService } from '../../services/cocktaildb.service';

@Component({
  selector: 'app-detail-drink',
  templateUrl: './detail-drink.component.html',
  styleUrls: ['./detail-drink.component.sass']
})
export class DetailDrinkComponent implements OnInit {

  drink: Drink = <Drink>{};
  regresarA: string = "";

  constructor(public router: Router, public route: ActivatedRoute, public cocktaildbservice: CocktaildbService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCocktailById(params["id"]);
      this.regresarA = params["pag"];

      if(this.regresarA !== 'random'){
        this.regresarA = 'type-drinks/' + this.regresarA;
      }

    });
    
  }

   async getCocktailById(id: string) {
     this.cocktaildbservice.getDrinkById(id).subscribe((drink: any) => this.drink = drink.drinks[0])
  }


}
