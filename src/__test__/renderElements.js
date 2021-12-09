import createListItem from '../_createListItem';

const removeAllChildrenNodes = (parentNode) => {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
};

export default function renderElements(object) {
  const activitiesContainer = document.querySelector('#activities-container');
  removeAllChildrenNodes(activitiesContainer);
  object.forEach((task) => {
    const activity = createListItem(task.description, task.estatus, task.index);
    activitiesContainer.appendChild(activity);
  });

  const taskContainer = document.querySelectorAll('.task-container');
  const checkbox = document.querySelectorAll('.checkbox');
  const label = document.querySelectorAll('.task-label');
  const text = document.querySelectorAll('.task-input');
  const deleteIcon = document.querySelectorAll('.delete-icon');

  checkStatus(checkbox, label);

  /**
   * *Inner function to save changes and return to previous state
   * @param {number} index - row of elements to modify
   */
  function returnAndSave(index) {
    label[index].textContent = text[index].value;
    list.descriptionUpdate(index, text[index].value);
    taskContainer[index].classList.remove('edit');
    toggleClassBetweenElements(text[index], label[index], 'hidden');
  }

  /**
   * *Auxiliar function to modify and save values on each task
   */
  label.forEach((element, index) => {
    element.addEventListener('click', () => {
      taskContainer[index].classList.add('edit');
      toggleClassBetweenElements(label[index], text[index], 'hidden');
      text[index].value = label[index].textContent;
      text[index].focus();
    });
  });
  text.forEach((element, index) => {
    element.addEventListener('focusout', () => {
      returnAndSave(index);
    });
    element.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.code === 'Enter' && text[index].value.trim() !== '') {
        returnAndSave(index);
      }
    });
  });

  /**
   * *Auxiliar function to delete an element
   */
  deleteIcon.forEach((element, index) => {
    element.addEventListener('click', () => {
      activitiesContainer.removeChild(taskContainer[index]);
      list.removeOnce(index);
    });
  });
}
