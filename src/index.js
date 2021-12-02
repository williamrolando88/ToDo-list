import './styles.scss';
import ToDoList from './_ToDoList.js';
import { checkbox } from './_checkbox.js';
import createListItem from './_createListItem.js';

const list = new ToDoList();
list.add('Wash the dishes');
list.add('Do the laundry');
// list.add('Walk the dog');
// list.add('Buy the grocceries');
// list.add('Meet aunt at six pm');
// list.add('Submit project');

/**
 * *Function to render elements in HTML
 */
function renderElements() {
  const activitiesContainer = document.querySelector('#activities-container');
  list.array.forEach((task) => {
    const activity = createListItem(task.description, task.estatus, task.index);
    activitiesContainer.appendChild(activity);
    const checkbox = document.querySelector('.checkbox');
    // console.log(checkbox.checked);
  });
}
renderElements();
