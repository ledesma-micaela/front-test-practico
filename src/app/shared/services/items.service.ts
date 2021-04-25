import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemDetails, SearchResults } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  backendUrl = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) { }

  getFilteredItems(searchParam: string): Observable<SearchResults> {
    return this.http.get<SearchResults>(`${this.backendUrl}?q=${searchParam}`);
  }

  getItemDetails(itemId: string): Observable<ItemDetails> {
    return this.http.get<ItemDetails>(`${this.backendUrl}/${itemId}`);
  }
}
