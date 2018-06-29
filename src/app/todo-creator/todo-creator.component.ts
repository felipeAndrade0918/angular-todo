import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent {

  task: string = '';
  @Output() todoCreated = new EventEmitter();

  createTodo() {
    this.todoCreated.emit(this.task);
    this.task = '';
  }  

}
