/**
 * @jest-environment jsdom
 */

import renderElements from './renderElements';
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
