import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { StorageService } from './storage.service';

describe('StorageService', () => {

  let storageService: StorageService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController)
    storageService = TestBed.get(StorageService);
  });

  it('Debe crear el servicio StorageService', () => {
    expect(storageService).toBeTruthy();
  }); 
  
  it('Debe crear la función setData() y enviar key, value como parámetros', () => {
    storageService.setData('category', 'c');
    expect(localStorage.getItem('category').length).toEqual(1);
  }); 
  
  it('Debe crear la función getData() y enviar key como parámetro', () => {
    let cat = storageService.getData('category');
    expect(cat.length).toEqual(1);
  }); 
  
  it('Debe crear la función removeData() y enviar key como parámetro', () => {
    storageService.removeData('category');
    let cat = storageService.getData('category');
    expect(cat).toEqual(null);
  }); 
  
  it('Debe crear la función clearStorage() y limpiar todo el LocalStorage', () => {
    storageService.clearStorage();
    expect(localStorage.length).toEqual(0);
  }); 

});
