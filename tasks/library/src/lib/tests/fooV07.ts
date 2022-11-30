/**
 * ____________ test cElementV06 (CEV06) without append (prototyp)  _________________
 */
import { CEV06 } from "./cElementV06";

export const fooV07 = () => {

  const container = document.querySelector(".company-list-wrapper") as HTMLElement;

  // container.appendChild(
  //   CEV06({ type: "ul" })[0].appendChild(
  //     CEV06({ type: "li" })[0].appendChild(
  //       CEV06({ type: "span" })[0].appendChild(CEV06({ type: "//?div"? })[0])
  //     )
  //   )
  // ); // ? Problem => append wird nur das letztes Element 'div'

  container.appendChild(CEV06({type: 'ui'})[0])
  .appendChild(CEV06({type: 'li'})[0])
  .appendChild(CEV06({type: 'span'})[0])
  .appendChild(CEV06({type: 'span'})[0])
  .parentElement?.parentElement?.appendChild(CEV06({type: 'span'})[0])

  console.log(container);
};
