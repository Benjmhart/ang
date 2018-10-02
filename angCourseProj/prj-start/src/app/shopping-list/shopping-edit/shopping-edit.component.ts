import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../common/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInput: ElementRef;
  @ViewChild('amountInput')
  amountInput: ElementRef;
  constructor() {}
  @Output()
  newItem = new EventEmitter<Ingredient>();

  ngOnInit() {}

  addItem() {
    const item = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.newItem.emit(item);
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
