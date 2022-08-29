import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent implements OnInit {
  
  @Input() categories: Array<Category> = [];
  @Input() array: any = [];
  @Input() placeHolderText: string = 'Click the Navigation button to choose a category and then enter the item you are looking for here.';
  @Output() arrayFiltered: any = new EventEmitter();

  category: Category = {name: '', value: ''};

  constructor() { }

  onSearch(e: any) {
    let newArray = [...this.array];
    const term = e.target.value;
    const filtered = newArray.filter((item: any) => item[this.category.value].toLowerCase().trim().includes(term.toLowerCase().trim()));
    this.arrayFiltered.emit(filtered);
  }

  onCategoryChange(e: any) {
    const categoryChange = this.categories.find((category: Category) => category.value === e.target.value);
    if(categoryChange) this.category = categoryChange;
  }

  ngOnInit(): void {
    this.category = {name: this.categories[0].name, value: this.categories[0].value};
  }

}
