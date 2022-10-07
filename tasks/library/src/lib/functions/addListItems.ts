/**
 * to create a new ListItem in the document
 * @param parent "parent" is an HTML element
 * @param html html is array of string what innerHTML should write
 * @param className is string, a class name
 * @param id is string, a id name
 */
export const addListItems = (
  parent: HTMLElement,
  html?: string[],
  className?: string,
  id?: string,
): void => {
  html?.forEach((html) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    if (className) item.classList.add(className);
    if (html) label.append(html);
    if (id) item.id = id;
    item.appendChild(label);
    parent.appendChild(item);
  });
};
