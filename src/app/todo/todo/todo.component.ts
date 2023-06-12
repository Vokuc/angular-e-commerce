import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  taskList: any[] = [];
  addTask(task: string) {
    console.log(task)
    this.taskList.push({ id: this.taskList.length, name: task })
    console.warn(this.taskList)
  }

  delete(id:number) {
    console.log(id);
    this.taskList = this.taskList.filter(item => item.id !== id)
  }
}
