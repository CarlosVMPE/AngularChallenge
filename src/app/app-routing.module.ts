import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TypeDrinkComponent } from './components/type-drink/type-drink.component';
import { DetailDrinkComponent } from './components/detail-drink/detail-drink.component';

const routes: Routes = [
  { path: 'random', component: HomeComponent },
  { path: 'type-drinks/:type', component: TypeDrinkComponent },
  { path: 'drink/:id/:pag', component: DetailDrinkComponent },
  { path: '', pathMatch: 'full', redirectTo: 'random' },
  { path: '**', pathMatch: 'full', redirectTo: 'random' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }