export default class Task {
  constructor(description, index, estatus = false) {
    this.description = description;
    this.estatus = estatus;
    this.index = index;
  }
}
