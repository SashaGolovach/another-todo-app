import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IToDoItem } from '../models/to-do-item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  baseApiUrl = 'http://127.0.0.1:3000/todo';
  toDoItems: IToDoItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchToDoItems();
  }

  addToDoItem(name: string) {
    const item = {
      Text: name
    }
    this.http.post(this.baseApiUrl, item).subscribe(res => console.log(res));
    this.fetchToDoItems();
  }

  removeToDoItem(id: string) {
    this.http.delete(this.baseApiUrl + '/' + id).subscribe(res => console.log(res));
    this.fetchToDoItems();
  }

  fetchToDoItems() {
    this.http.get<IToDoItem[]>(this.baseApiUrl, { responseType: 'json', observe: 'response' }).subscribe(res => {
      this.toDoItems = res.body ?? [];
    });
  }

}
