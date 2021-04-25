import { ComponentFixture, TestBed } from '@angular/core/testing';
import { registerLocaleData } from '@angular/common';
import { Item } from '../../models/item';
import { CurrencySymbolPipe } from '../../pipes/currency-symbol.pipe';
import { ItemConditionPipe } from '../../pipes/item-condition.pipe';

import { ItemCardComponent } from './item-card.component';
import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr, 'es-Ar');

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;
  let mockItem: Item;

  beforeEach(async () => {
    mockItem =  {
      id: '123',
      title: 'Item test',
      price: {
          currency: 'ARS',
          amount: 4900,
          decimals: null
      },
      condition: 'new',
      free_shipping: true,
      picture: 'test.jpg',
      sold_quantity: 42,
      description: 'test description'
    };

    await TestBed.configureTestingModule({
      declarations: [ ItemCardComponent, ItemConditionPipe, CurrencySymbolPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    component.item = mockItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
