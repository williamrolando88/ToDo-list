import './styles.scss';
import createListItem from './_createListItem.js';
import ToDoList from './_ToDoList.js';

/**
 * *Variable declaration
 */
const newTask = document.querySelector('#todo-input');
const clearAllButton = document.querySelector('button');
const list = new ToDoList();

/**
 * *Auxiliar function to empty a node
 * @param {node} parentNode - to be emptied
 */
const removeAllChildrenNodes = (parentNode) => {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
};

/**
 * *Auxiliar function to update object's status on memory
 * @param {HTMLElement} checkbox - to check estatus
 * @param {HTMLElement} label - to be manipulated
 */
function checkStatus(checkbox, label) {
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

/**
 * *Auxiliar function to toggle the same class between 2 different elements
 * @param {HTMLElement} elem1 - element to be added the new class
 * @param {HTMLElement} elem2 - element to be removed the class
 * @param {string} className - HTML class to interact
 */
function toggleClassBetweenElements(elem1, elem2, className) {
  elem1.classList.add(className);
  elem2.classList.remove(className);
}

/**
 * *Function to render elements in HTML
 */
function renderElements(object) {
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

/**
 * *Function to erase all completed elements
 */
clearAllButton.addEventListener('click', () => {
  list.removeCompleted();
  renderElements(list.array);
});

/**
 * *Function to render elements stored in local storage
 */
window.onload = function reload() {
  if (ToDoList.get().length > 0) {
    const memoryList = ToDoList.get();
    memoryList.forEach((task) => {
      list.add(task.description, task.estatus);
    });
    renderElements(list.array);
  }
};

/**
 * *Function to add new task
 */
newTask.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.code === 'Enter' && newTask.value.trim() !== '') {
    list.add(newTask.value);
    newTask.value = '';
    renderElements(list.array);
  }
});
