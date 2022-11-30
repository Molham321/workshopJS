export {};

/**
 *  TypeEvent is a Object to set new event to new HTMLElement
 */
type TEvent = {
  click?: EventListenerOrEventListenerObject;
  keydown?: EventListenerOrEventListenerObject;
  mouseover?: EventListenerOrEventListenerObject;
  mousedown?: EventListenerOrEventListenerObject;
  mousemove?: EventListenerOrEventListenerObject;
  mouseout?: EventListenerOrEventListenerObject;
};

export type { TEvent };
