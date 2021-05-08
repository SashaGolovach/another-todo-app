import { Component, OnInit } from '@angular/core';
import { IToDoItem } from '../models/to-do-item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDoItems: Array<IToDoItem> = [
    {
      Text: 'Create css classes',
      Id: '1'
    },
    {
      Text: 'Refactor code',
      Id: '2'
    },
    {
      Text: 'Add http service',
      Id: '3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToDoItem(name: string) {
    const item: IToDoItem = {
      Text: name,
      Id: '4'
    }
    this.toDoItems.unshift(item);
  }

  removeToDoItem(id: string) {
    this.toDoItems = this.toDoItems.filter(item => item.Id != id);
  }

}
