import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent implements OnInit {
  @Input() categories: Array<Category> = [];
  @Input() array: any = [];
  @Input() pleaceHolderText: string = 'יש להזין טקסט ולבחור קטגוריה לפני ';
  @Output() arrayFilterd: any = new EventEmitter();
  category: Category = { name: '', value: '' };
  constructor() {}
  onSearch(e: any) {
    let newArray = [...this.array];
    const term = e.target.value;
    const filterd = newArray.filter((item: any) =>
      item[this.category.value]
        .toLowerCase()
        .trim()
        .includes(term.toLowerCase().trim())
    );
    
  }
  ngOnInit(): void {}
}
