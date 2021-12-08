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
});
