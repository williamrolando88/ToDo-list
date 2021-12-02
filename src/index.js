import './styles.scss';
import createListItem from './_createListItem.js';
import { list } from './_list.js';

/**
 * *Function to render elements in HTML
 */
function renderElements() {
  const activitiesContainer = document.querySelector('#activities-container');
  list.array.forEach((task) => {
    const activity = createListItem(task.description, task.estatus, task.index);
    activitiesContainer.appendChild(activity);
  });

  const checkbox = document.querySelectorAll('.checkbox');
  const label = document.querySelectorAll('.task-label');
  checkbox.forEach((element, index) => {
    element.addEventListener('change', () => {
      list.statusUpdate(index, checkbox[index].checked);
      if (checkbox[index].checked === true) {
        label[index].classList.add('crossed');
      } else {
        label[index].classList.remove('crossed');
      }
    });
  });
}
renderElements();
