import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../shared/models/item';
import { ItemsService } from '../shared/services/items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  itemId!: string;
  item!: Item;
  isLoading!: boolean;
  hasError!: boolean;

  subscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemsService: ItemsService) {
    this.route.params.subscribe(params => {
      this.itemId = params.id || '';
    });
  }

  ngOnInit(): void {
    this.getItemDetails();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getItemDetails(): void {
    this.isLoading = true;
    this.subscriptions.add(
      this.itemsService.getItemDetails(this.itemId).subscribe(
        data => {
          this.item = data.item;
          // this.categories = data.categories;
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

  searchItems(searchValue: string): void {
    this.router.navigate(['items'], { queryParams: { q: searchValue }});
  }
}
