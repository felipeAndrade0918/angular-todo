import { Component, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent {

  task: string = '';
  @Output() todoCreated = new EventEmitter();

  constructor(private todoService: TodoService) {

  }

  createTodo() {
    if (this.task) {
      this.todoService.addTodo(this.task);
      this.task = '';
    }
  }  

}
