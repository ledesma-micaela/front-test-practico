import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() searchValue = '';
  @Output() searchAccion = new EventEmitter<string>();

  formSearch: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    this.formSearch.controls.search.setValue(this.searchValue);
  }

  clickSearch(): void {
    const searchParam = this.formSearch.controls.search.value;
    this.searchAccion.emit(searchParam);
  }
}
