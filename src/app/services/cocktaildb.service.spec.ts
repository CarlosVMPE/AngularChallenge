import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { CocktaildbService } from './cocktaildb.service';

fdescribe('CocktaildbService', () => {

  let cocktaildbService: CocktaildbService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController)
    cocktaildbService = TestBed.get(CocktaildbService);
  });

  it('Debe crear el servicio CocktaildbService', () => {
    expect(cocktaildbService).toBeTruthy();
  }); 
  
  it('Debe crear la función setListDrinks() y enviar como parámetro listDrinks', () => {
    let listDrinks = [];
    cocktaildbService.setListDrinks(listDrinks);
    cocktaildbService.listDrinks.subscribe(list => {
        expect(list.length).toBe(0)
    })
  }); 
  
  it('Debe crear la función setCategoryDrinks() y enviar como parámetro category', () => {
    let category = 'c'
    cocktaildbService.setCategoryDrinks(category);
    cocktaildbService.category.subscribe(cat => {
        expect(cat).toBe(category)
    })
  }); 

  it('Debe crear la función getRandomDrink() y retornar una bebida aleatoria', () => {
    cocktaildbService.getRandomDrink().subscribe(drink => {
        expect(drink).toBeTruthy()
    });
  }); 
  
  it('Debe crear la función getDrinkByType() y retornar un arreglo de tipo bebidas', () => {
    cocktaildbService.getDrinkByType('c').subscribe(drink => {
        expect(drink).toBeTruthy()
    });
  }); 

  it('Debe crear la función getDrinkByFilterType() y retornar filtrar por tipo y categoria', () => {
    cocktaildbService.getDrinkByFilterType('Ordinary Drink','c').subscribe(drink => {
        expect(drink).toBeTruthy()
    });
  }); 
  
  it('Debe crear la función getDrinkById() y retornar una bebida por su ID', () => {
    cocktaildbService.getDrinkById('17222').subscribe(drink => {
        expect(drink).toBeTruthy()
    });
  }); 
  
  it('Debe crear la función getDrinkByFirstLetter() y retornar un arreglo de bebidas filtradas por una letra', () => {
    cocktaildbService.getDrinkByFirstLetter('a').subscribe(drink => {
        expect(drink).toBeTruthy()
    });
  }); 
});
