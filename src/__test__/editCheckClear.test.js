/**
 * @jest-environment jsdom
 */

// import renderElements from './renderElements';
import ToDoList from '../_ToDoList.js';
import createListItem from '../_createListItem.js';

const list = new ToDoList();
list.add('Wash the dishes');
list.add('Wash the clotches');
list.add('Wash the car');
const activitiesContainer = document.createElement('ul');
list.array.forEach((task) => {
  const taskItem = createListItem(task.description, task.estatus, task.index);
  activitiesContainer.appendChild(taskItem);
});

describe('update values in a task', () => {
  test('render 3 element', () => {
    expect(activitiesContainer.childElementCount).toBe(3);
  });
  test('update 1 task description', () => {
    list.descriptionUpdate(0, 'Wash the dog');
    expect(list.array[0].description).toBe('Wash the dog');
  });
  test('update 1 DOM description', () => {
    const label = activitiesContainer.querySelectorAll('.task-label');
    label[0].textContent = list.array[0].description;
    expect(label[0].textContent).toBe('Wash the dog');
  });
});

describe('Mark a task as completed clicking on the checkbox', () => {
  const checkboxList = activitiesContainer.querySelectorAll('.checkbox');
  test('It should be 3 activities with checkboxes', () => {
    expect(checkboxList.length).toBe(3);
  });
  test('click on checkbox task 1', () => {
    checkboxList[0].click();
    expect(checkboxList[0].checked).toBe(true);
  });
  test('Update status in local storage', () => {
    list.statusUpdate(0, checkboxList[0].checked);
    expect(list.array[0].estatus).toBe(true);
  });
});

describe('Clear all completed tasks', () => {
  list.statusUpdate(2, true);
  test('only uncompleted tasks remain', () => {
    list.removeCompleted();
    expect(list.array.length).toBe(1);
  });
  test('index of remaining element is correct', () => {
    expect(list.array[0].index).toBe(0);
  });
});
