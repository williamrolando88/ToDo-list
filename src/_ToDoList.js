import Task from './_Task.js';

export default class ToDoList {
  constructor() {
    this.array = [];
  }

  add(description) {
    const task = new Task(description, this.array.length);
    this.array.push(task);
    this.set(this.array);
  }

  /* eslint-disable */
  set(element) {
    localStorage.setItem('toDoList', JSON.stringify(element));
  }

  get() {
    if (!JSON.parse(localStorage.getItem('toDoList'))) {
      this.array = [];
    } else {
      this.array = JSON.parse(localStorage.getItem('toDoList'));
    }
  }

  statusUpdate(index, newEstatus) {
    this.array[index].estatus = newEstatus;
    this.set(this.array);
  }
}
