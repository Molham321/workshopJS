import {
  __chunk,
  __compact,
  __getHTMLElement,
  __getHTMLElements,
  __makeDiv,
  __operations,
  __setClassName,
} from './lib';

// =============================================================
/**
 * test __chunk
 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(__chunk(arr, 2));
// =============================================================

// =============================================================
/**
 * test __compact
 */
// const arr = [1, 3, 0, false, 2, '', 4, undefined, 5, NaN];
// console.log(__compact(arr));
// =============================================================

// =============================================================
/**
 * test __operations
 */
// console.log(__operations(3, '+', 3));
// console.log(__operations(3, '-', 3));
// console.log(__operations(3, '*', 3));
// console.log(__operations(3, '/', 3));
// console.log(__operations(3, 'T', 3));
// =============================================================

// =============================================================
/**
 * test __getHTMLElement
 */
// console.log(__getHTMLElement('div'));
// console.log(__getHTMLElement('.cls'));
// console.log(__getHTMLElement('.subcls'));
// console.log(__getHTMLElement('#subcls1'));
// console.log(__getHTMLElement('das gibt es nicht'));
// console.log(__getHTMLElement('#cls1'));
// console.log(__getHTMLElement('#cls2'));
// =============================================================

// =============================================================
/**
 * test __getHTMLElements
 */
// console.log(__getHTMLElements('div'));
// console.log(__getHTMLElements('.cls'));
// =============================================================

// =============================================================
/**
 * test __mackDiv
 */
// const elementTyp = 'div';
// const parent = __getHTMLElement('#cls2');
// const html = '';
// const className = 'className';
// __makeDiv(elementTyp, parent, html, className);
// =============================================================

// =============================================================
/**
 * test __setClassName
 */
// const div = document.getElementById('cls1');
// __setClassName(div, 'test1', 'test2', 'test3');
// =============================================================

//todo: .....
// const div = document.getElementById('cls1');
// __setAttributes(div, 'value', 'value');
