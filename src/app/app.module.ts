import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
registerLocaleData(localeEs);

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarHeaderComponent } from "./components/navbar-header/navbar-header.component";
import { HomeComponent } from "./components/home/home.component";
import { TypeDrinkComponent } from "./components/type-drink/type-drink.component";
import { DrinkComponent } from "./components/drink/drink.component";
import { DetailDrinkComponent } from "./components/detail-drink/detail-drink.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    HomeComponent,
    TypeDrinkComponent,
    DrinkComponent,
    DetailDrinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  exports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
