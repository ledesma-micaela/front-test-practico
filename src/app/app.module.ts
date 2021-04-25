import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localeEsAr from '@angular/common/locales/es-AR';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsListComponent } from './shared/components/items-list/items-list.component';
import { CurrencySymbolPipe } from './shared/pipes/currency-symbol.pipe';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { ItemConditionPipe } from './shared/pipes/item-condition.pipe';
registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchResultsComponent,
    HomeComponent,
    ItemDetailsComponent,
    ItemsListComponent,
    CurrencySymbolPipe,
    ItemCardComponent,
    ItemConditionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
