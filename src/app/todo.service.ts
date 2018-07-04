import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: string[] = [];

  constructor() {

  }

  getTodos() {
    return this.todos.slice();
  }

  addTodo(todo:string) {
    this.todos.push(todo);
  }
}
