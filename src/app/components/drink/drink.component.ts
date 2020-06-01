import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../../interfaces/drink.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.sass']
})
export class DrinkComponent implements OnInit {


  @Input() drinks: Drink[] = [];
  @Input() pag: string = "";
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetailDrink(idDrink: string){
    this.router.navigate(['/drink', idDrink, this.pag]);
  }

}
