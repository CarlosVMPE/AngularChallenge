import { Component, OnInit } from "@angular/core";
import { CocktaildbService } from "../../services/cocktaildb.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { Drink } from '../../interfaces/drink.interface';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: "app-navbar-header",
  templateUrl: "./navbar-header.component.html",
  styleUrls: ["./navbar-header.component.sass"],
})
export class NavbarHeaderComponent implements OnInit {
  myControl = new FormControl();
  drinksFilter: Drink[] = [];
  options: any[] = [];
  filteredOptions: Observable<any[]>;
  category: string;

  constructor(
    public router: Router,
    public cocktaildbservice: CocktaildbService,
    public storageService: StorageService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : (name ? this.options.slice() : null) ))
    );

    this.cocktaildbservice.category.subscribe(cat => {
      this.category = cat ? cat : this.storageService.getData('category');
    });
  }

  displayFn(obj: any): string {
    return obj && obj.name ? obj.name : "";
  }

  public _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    
    if(filterValue.length > 0){
      this.cocktaildbservice.getDrinkByFirstLetter(filterValue).subscribe((res: any) => {
        this.drinksFilter = res.drinks;
        this.drinksFilter.forEach(drink => {
          this.options.push({
            id: drink.idDrink,
            name: drink.strDrink
          })
        });
      });
    }


    return this.options.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  setCategory() {
    this.cocktaildbservice.setCategoryDrinks('random');
  }

  getDrink(drink: any){
    console.log('Drink selected: ', drink);
    if(this.category === 'c'){
      this.category = 'categories';
    } else if(this.category === 'g'){
      this.category = 'glasses';
    } else if(this.category === 'i') {
      this.category = 'ingredients';
    } else if (this.category === 'a'){
      this.category = 'alcoholic';
    }
    this.router.navigate(['/drink', drink.id, this.category]);
  }
}
