import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  getTodos() {
    return this.todoService.getTodos();
  }

}