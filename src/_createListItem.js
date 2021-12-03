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

/**
 * *Function to render each task
 * @param {string} description - description of the activity
 * @param {number} index - number in the task array
 * @returns {HTMLElement}
 */
const createListItem = (description, estatus, index) => {
  const li = createHtmlElementWithClass('li', 'task-container');

  const descriptionDiv = createHtmlElementWithClass('div', 'task-description');

  const labelClass = ['task-label'];
  if (estatus) {
    labelClass.push('crossed');
  }

  const checkbox = createHtmlElementWithClass('input', 'checkbox');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = estatus;
  checkbox.setAttribute('name', `checkbox${index}`);
  descriptionDiv.appendChild(checkbox);

  const label = createHtmlElementWithClass('label', labelClass);
  label.id = `label${index}`;
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
    'hidden',
  ]);
  dragIndicator.textContent = 'more_vert';
  iconsDiv.appendChild(dragIndicator);

  const deleteIcon = createHtmlElementWithClass('span', [
    'material-icons',
    'delete-icon',
  ]);
  deleteIcon.textContent = 'delete';
  iconsDiv.appendChild(deleteIcon);

  li.appendChild(iconsDiv);

  return li;
};

export default createListItem;
