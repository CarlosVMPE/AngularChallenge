import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Drink } from '../interfaces/drink.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CocktaildbService {
  
  listDrinks: BehaviorSubject<Drink[]> = new BehaviorSubject<Drink[]>([]);
  category: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  url = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(public http: HttpClient, public storageService: StorageService) {}

  setListDrinks(listDrinks: Drink[]){
    this.storageService.setData('listDrinks', JSON.stringify(listDrinks));
    this.listDrinks.next(listDrinks);
  }
  
  setCategoryDrinks(category: string){
    this.storageService.setData('category', category);
    this.category.next(category);
  }

  getRandomDrink(){
    return this.http.get(this.url+'random.php').pipe();
  }

  getDrinkByType(type: string){
    return this.http.get(`${this.url}list.php?${type}=list`).pipe();
  }

  getDrinkByFilterType(category: string, type: string){
    return this.http.get(`${this.url}filter.php?${category}=${type}`).pipe();
  }

  getDrinkById(id: string){
    return this.http.get(`${this.url}lookup.php?i=${id}`).pipe(map((res: any) => res));
  }

  getDrinkByFirstLetter(letter: string){
    return this.http.get(`${this.url}search.php?f=${letter}`).pipe(map((res: any) => res));
  }
}
