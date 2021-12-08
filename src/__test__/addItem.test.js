/**
 * @jest-environment jsdom
 */

import createListItem from '../_createListItem';
import ToDoList from '../_ToDoList';

describe('add item', () => {
  const list = new ToDoList();

  test('list is instance of ToDoList?', () => {
    expect(list).toBeInstanceOf(ToDoList);
  });

  list.add('Wash the dishes');

  test('add new task to list', () => {
    expect(list.array[0].description).toBe('Wash the dishes');
  });
  test('adds li to DOM', () => {
    const activitiesContainer = document.createElement('ul');
    const listItem = createListItem(list.array[0].description, list.array[0].estatus, list.array[0].index);
    activitiesContainer.appendChild(listItem);
    expect(activitiesContainer.childElementCount).toBe(1);
  })
});
