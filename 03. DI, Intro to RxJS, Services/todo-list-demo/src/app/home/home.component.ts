import { Component, OnInit } from '@angular/core';
import { IToDoItem } from '../interfaces/toDoItem';

@Component({
  selector: 'todo-list-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toDoList: IToDoItem[] = [
    {
      title: 'Item 1', isCompleted: false
    },
    {
      title: 'Item 2', isCompleted: true
    },
    {
      title: 'Item 3', isCompleted: false
    },
    {
      title: 'Item 4', isCompleted: true
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  

  buttonLabel(): string {
    let result: string = '';
    if (this.toDoList.some(item => item.isCompleted)) {
      result = 'Mark all as pending';

    } else {
      result = 'Mark all as completed';

    }

    return result;
  }

  markAll(): void {
    if (this.toDoList.some(item => item.isCompleted)) {
      this.toDoList.map(item => item.isCompleted = false);
    } else {
      this.toDoList.map(item => item.isCompleted = true);
    }
  }

  
}
