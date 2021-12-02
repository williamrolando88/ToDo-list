import './styles.scss';

const toDoList = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Do the laundry',
    completed: false,
    index: 1,
  },
  {
    description: 'Walk the dog',
    completed: false,
    index: 2,
  },
  {
    description: 'Buy the grocceries',
    completed: false,
    index: 3,
  },
  {
    description: 'Meet aunt at six pm',
    completed: false,
    index: 4,
  },
];

/**
 * * Function to create HTMLElement with class
 * @param {string} tag - HTML tag name
 * @param {(string|[string])} className - HTML class for the element
 * @returns {HTMLElement}
 */
const createHtmlElementWithClass = (tagName, className) => {
  const tag = document.createElement(tagName);
  if (!className) return tag;
  if (Array.isArray(className)) {
    tag.classList.add(...className);
  } else {
    tag.classList.add(className);
  }
  return tag;
};

const createListItem = (description, index) => {
  const li = createHtmlElementWithClass('li', 'task-container');
  li.setAttribute('id', `toDo${index}`);

  const descriptionDiv = createHtmlElementWithClass('div', 'task-description');

  const checkbox = createHtmlElementWithClass('input', 'checkbox');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', `checkbox${index}`);
  checkbox.id = `checkbox${index}`;
  descriptionDiv.appendChild(checkbox);

  const label = createHtmlElementWithClass('label', 'task-label');
  label.setAttribute('for', `checkbox${index}`);
  label.textContent = description;
  descriptionDiv.appendChild(label);

  const text = createHtmlElementWithClass('input', ['task-input', 'hidden']);
  text.setAttribute('type', 'text');
  text.id = `description${index}`;
  descriptionDiv.appendChild(text);

  li.appendChild(descriptionDiv);

  const iconsDiv = createHtmlElementWithClass('div', 'task-icons');

  const dragIndicator = createHtmlElementWithClass('span', [
    'material-icons',
    'drag-icon',
  ]);
  dragIndicator.textContent = 'more_vert';
  iconsDiv.appendChild(dragIndicator);

  const deleteIcon = createHtmlElementWithClass('span', [
    'material-icons',
    'delete-icon',
    'hidden',
  ]);
  deleteIcon.textContent = 'delete';
  iconsDiv.appendChild(deleteIcon);

  li.appendChild(iconsDiv);

  return li;
};

function renderElements() {
  const activitiesContainer = document.querySelector('#activities-container');
  toDoList.forEach((task) => {
    const activity = createListItem(task.description, task.index);
    activitiesContainer.appendChild(activity);
  });
}
renderElements();
