import { createListItem } from '../_createListItem'

// const activitiesContainer = document.createElement('ul');

function renderElements(object) {
    const activitiesContainer = document.querySelector('#activities-container');
    removeAllChildrenNodes(activitiesContainer);
    object.forEach((task) => {
      const activity = createListItem(task.description, task.estatus, task.index);
      activitiesContainer.appendChild(activity);
    });
}

export default renderElements;