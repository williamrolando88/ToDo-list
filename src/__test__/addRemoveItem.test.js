/**
 * @jest-environment jsdom
 */

import createListItem from '../_createListItem.js';
import ToDoList from '../_ToDoList.js';

const list = new ToDoList();
list.add('Wash the dishes');
const activitiesContainer = document.createElement('ul');
const listItem = createListItem(
  list.array[0].description,
  list.array[0].estatus,
  list.array[0].index,
);
activitiesContainer.appendChild(listItem);

describe('add item', () => {
  test('list is instance of ToDoList?', () => {
    expect(list).toBeInstanceOf(ToDoList);
  });

  test('add new task to list', () => {
    expect(list.array[0].description).toBe('Wash the dishes');
  });
  test('adds li to DOM', () => {
    expect(activitiesContainer.childElementCount).toBe(1);
  });
});

describe('remove item', () => {
  test('remove from DOM', () => {
    activitiesContainer.removeChild(activitiesContainer.firstChild);
    expect(activitiesContainer.childElementCount).toBe(0);
  });

  test('remove task from list', () => {
    list.removeOnce(0);
    expect(list.array.length).toBe(0);
  });
});
