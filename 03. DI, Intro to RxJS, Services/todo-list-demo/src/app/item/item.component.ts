import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IToDoItem } from '../interfaces/toDoItem';

@Component({
  selector: 'todo-list-app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() toDoItem!: IToDoItem;
  //@Output() displayTime: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleStatusChange(item: IToDoItem): void {
    item.isCompleted = !item.isCompleted;
    //this.displayTime.emit(new Date().getTime().toString())
  }

  displayTime(): string{
    return new Date().toString();
  }
}
