import Task from './_Task.js';

export default class ToDoList {
  constructor() {
    this.array = [];
  }

  add(description, estatus = false) {
    const pos = this.array.length;
    const task = new Task(description, pos, estatus, `id.${pos}`);
    this.array.push(task);
    this.reid();
    this.set();
  }

  statusUpdate(index, newEstatus) {
    this.array.forEach((element) => {
      if (element.id === `id.${index}`) {
        element.estatus = newEstatus;
      }
      this.set();
    });
  }

  descriptionUpdate(index, description) {
    this.array.forEach((element) => {
      if (element.id === `id.${index}`) {
        element.description = description;
      }
    });
    this.set();
  }

  /* eslint-disable */
  removeOnce(index) {
    this.array = this.array.filter((element) => {
      if (element.id !== `id.${index}`) {
        return element;
      }
    });
    this.reindex();
    this.set();
  }

  removeCompleted() {
    this.array = this.array.filter((element) => {
      if (element.estatus === false) {
        return element;
      }
    });
    this.reindex();
    this.reid();
    this.set();
  }
  /* eslint-enable */

  reindex() {
    if (this.array.length > 0) {
      this.array.forEach((element, index) => {
        element.index = index;
      });
    }
  }

  reid() {
    if (this.array.length > 0) {
      this.array.forEach((element, index) => {
        element.id = `id.${index}`;
      });
    }
  }

  set() {
    localStorage.setItem('toDoList', JSON.stringify(this.array));
  }

  static get() {
    if (!JSON.parse(localStorage.getItem('toDoList'))) {
      this.array = [];
    } else {
      this.array = JSON.parse(localStorage.getItem('toDoList'));
    }
    return this.array;
  }
}
