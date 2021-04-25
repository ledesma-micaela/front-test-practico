import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../shared/models/item';
import { ItemsService } from '../shared/services/items.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchParam!: string;
  categories!: string[];
  currentItems!: Item[];
  isLoading!: boolean;
  hasError!: boolean;
  subscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemsService: ItemsService) {
    this.route.queryParams.subscribe(params => {
      this.searchParam = params.q || '';
    });
  }

  ngOnInit(): void {
    this.getFilteredItems();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getFilteredItems(): void {
    this.isLoading = true;
    this.subscriptions.add(
      this.itemsService.getFilteredItems(this.searchParam).subscribe(
        data => {
          this.categories = data.categories;
          this.currentItems = data.items.slice(0, 4);
          this.isLoading = false;
          this.hasError = false;
        },
        error => {
          this.isLoading = false;
          this.hasError = true;
        }
      )
    );
  }

  searchItems(searchParam: string): void {
    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams: { q: searchParam },
        queryParamsHandling: 'merge'
      }
    );
    this.searchParam = searchParam;
    this.getFilteredItems();
  }

  itemClick(item: Item): void {
    this.router.navigate([`/items`, item.id]);
  }
}
