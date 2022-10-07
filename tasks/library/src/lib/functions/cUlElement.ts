export const cUlElement = (parent: HTMLElement): void => {
  const cmpyList = document.createElement("ul");
  parent.appendChild(cmpyList);

  const firstLi = document.createElement("li");
  cmpyList.appendChild(firstLi);

  const firstLabel = document.createElement("label");
  firstLi.appendChild(firstLabel);
};
