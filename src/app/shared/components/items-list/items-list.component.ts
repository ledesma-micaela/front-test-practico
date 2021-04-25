import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  hasItems!: boolean;

  @Input() items: Item[] = [];
  @Output() clickAccion = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
    this.hasItems = !!this.items.length;
  }

  itemClick(item: Item): void {
    this.clickAccion.emit(item);
  }
}
