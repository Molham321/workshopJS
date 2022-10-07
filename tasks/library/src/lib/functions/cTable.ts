/**
 * to create a new table in the document
 * @param parent "parent" is an HTML element
 * @param columns array of string
 * @param data array of Object like database
 * @param className is string, a class name
 * @param id is string, a id name
 * @returns we get a new table in a certain container with a certain class
 */
export const cTable = (
  parent: HTMLElement,
  columns: string[],
  data: object[],
  className?: string,
  id?: string,
): HTMLElement => {
  const table = document.createElement('table');
  if (className) table.classList.add(className);
  if (id) table.id = id;

  table.appendChild(document.createElement('thead'));
  table.querySelector('thead')?.appendChild(document.createElement('tr'));

  for (let i = 0; i < columns.length; i++) {
    const heading = document.createElement('td');
    heading.textContent = columns[i];
    table.querySelector('thead tr')?.appendChild(heading);
  }

  data.forEach((data) => {
    let row = document.createElement('tr');

    Object.values(data).forEach((text) => {
      const cell = document.createElement('td');
      const textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  return parent.appendChild(table);
};
