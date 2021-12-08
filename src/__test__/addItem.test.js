import ToDoList from '../_ToDoList';

describe('add item', () => {
  const list = new ToDoList();
  test('list is instance of ToDoList?', () => {
    expect(list).toBeInstanceOf(ToDoList);
  });
});
