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

test('render 1 element', () => {
  expect(activitiesContainer.childElementCount).toBe(3);
});
