import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktaildbService } from '../../services/cocktaildb.service';
import { Drink } from '../../interfaces/drink.interface';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-type-drink',
  templateUrl: './type-drink.component.html',
  styleUrls: ['./type-drink.component.sass']
})
export class TypeDrinkComponent implements OnInit {

  typeDrinks: Drink[] = [];
  subTypeDrinks: Drink[] = [];
  pag: string = "";
  category: string;

  constructor(
    private router: ActivatedRoute,
    private cocktaildbservice: CocktaildbService,
    private storageService: StorageService) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.showTypeOfDrink(params["type"]);
    });
    

    this.cocktaildbservice.listDrinks.subscribe(list => {
      this.subTypeDrinks = list && list.length > 0 ? list : JSON.parse(this.storageService.getData('listDrinks'));
    });

  }

  showTypeOfDrink(type: string){
    this.pag = type;
    if(type === 'categories'){
      this.category = 'c';
    } else if(type === 'glasses'){
      this.category = 'g';
    } else if(type === 'ingredients') {
      this.category = 'i';
    } else if (type === 'alcoholic'){
      this.category = 'a';
    }

    if(this.category){
      this.cocktaildbservice.category.next(this.category);
      this.cocktaildbservice.getDrinkByType(this.category).subscribe((list: any) => {
        this.typeDrinks = list.drinks;
      });
    }
    
  }
  
  findByCategory(type: string){

    let category
    this.cocktaildbservice.category.subscribe(cat => {
      category =  cat && cat.length > 0 ? cat : this.storageService.getData('category');
    });
    ;

    this.cocktaildbservice.getDrinkByFilterType(category, type).subscribe((subCat: any) => {
      this.subTypeDrinks = subCat.drinks;
      this.storageService.setData('listDrinks', JSON.stringify(this.subTypeDrinks));
    });
  }

}
