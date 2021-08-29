//////////////////////////////////
// TODO: Document Object
//////////////////////////////////

// console.dir(document);
// console.log(typeof document);
// console.log(document.title);
// console.log(document.body);
// console.log(document.head);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.images);
// console.log(document.contentType);
// console.log(document.charset);
// console.log(document.styleSheets);
// console.log(document.scripts);
// console.log(document.forms);
// console.log(document.location);
// console.log(document.cookie);
// console.log(document.links);
// document.title = 'Update title using script!';
// console.log(document.all); // HTML Collection Object List, Iterable
// for (let element of document.all) {
//     console.log(element);
// }



//////////////////////////////////
// TODO: Traversing DOM
//////////////////////////////////

/*
* textContent vs innerText vs innerHTML:
*
* textContent -> all text contained by an element and all its children that are for formatting purposes only
*
* innerText -> returns all text contained by an element and all its child elements
*
* innerHTML -> returns all text, including html tags, that is contained by an element
*/

// ! Get Element By Id
// let headerElementId = document.getElementById('header');
// headerElementId.textContent = 'TO-DO APPS';
// console.log(headerElementId.textContent); // To-Do App -> as document coded
// console.log(headerElementId.innerText); // TO-DO APP -> final browser output
// console.log(headerElementId.innerHTML); // To-Do <span>App</span> -> final browser output with html content
// headerElementId.style.color = 'red';
// headerElementId.style.borderBottom = '1px solid red';

// ! Get Element By Class Name :: HTML Collection
// let itemUrl = document.getElementById('items');
// let items = itemUrl.getElementsByClassName('item');
// for (let i = 0; i < items.length; i++) {
//     items[i].style.color = 'red';
// }

// ! Get Element By Tag Name :: HTML Collection
// const getByTagName = document.getElementsByTagName('li');
// console.log(getByTagName);

// ! Query Selector & Query Selector All :: Node List -> Iterable
// const byId = document.querySelector('#header');
// const byClass = document.querySelector('.header');
// const byTag = document.querySelector('h1');
// const lastItem = document.querySelector('.item:last-child'); // Always return first matched element, use as css child selector
// const secondLastItem = document.querySelector('.item:nth-child(2)'); // select the first matched 2nd-child
// const item = document.querySelector('.item'); // return just one item element
// const lastItems = document.querySelectorAll('.item:last-child'); // return all matched elements, NodeList type
// lastItem.style.color = 'orange';
// console.log(byId, byClass, byTag);
// console.log(lastItems);



//////////////////////////////////////
// TODO: Traversing DOM Hierarchy
//////////////////////////////////////

// const grandParent = document.querySelector('.todo-list');
// const parent = grandParent.children; // HTML Collection, Iterable
// const children = parent[1].children; // HTML Collection, Iterable
// console.log(children);

// ! Descendant Hierarchy :: parent -> children
// const grandParent1 = document.querySelector('.todo-list');
// const children2 = grandParent1.querySelectorAll('.item');
// console.log(children2);

// ! Ascendant Hierarchy :: children -> parent
// const children3 = document.querySelector('.item');
// const parent2 = children3.parentElement; // Immediate parent
// const grandParent2 = children3.closest('.todo-list'); // closest works on child to parent
// console.log(parent2);
// console.log(grandParent2);

// ! Sibling Hierarchy :: previous -> next
// const childrenOne = document.querySelector('.item');
// const nextChildren = childrenOne.nextElementSibling; // Immediate next sibling
// console.log(nextChildren);

// ! Sibling Hierarchy :: next -> previous
// const childrenTwo = document.querySelector('.item').nextElementSibling;
// const previousChildren = childrenTwo.previousElementSibling; // Immediate previous sibling
// console.log(previousChildren);



//////////////////////////////
// TODO: DOM Manipulation
//////////////////////////////

// ! Create Element
// const divElement = document.createElement('div');
// divElement.className = 'container';
// divElement.setAttribute('id', 'red');
// divElement.setAttribute('title', 'red div');
// const container = document.querySelector('.todo-list');
// const h2Element = container.querySelector('h2');
// container.insertBefore(divElement, h2Element); // insertBefore -> insert element before the selector element

/*
* appendChild vs append:
*
* appendChild -> 1) support only html element
*                2) return the appended element
*                3) only single element can be appended
*
* append -> 1) support text & html element
*           2) return undefined
*           3) multiple element can be appended to
*/
// container.appendChild(divElement);
// container.append(divElement);

/*
* insertAdjacentHTML() -> Inserts a text as HTML, into a specified position
* afterbegin - After the beginning of the element (as the first child)
* afterend - After the element
* beforebegin - Before the element
* beforeend - Before the end of the element (as the last child)
*/
// container.insertAdjacentHTML('afterbegin', '<div id="adjacent">adjacent</div>');



/////////////////////////
// TODO: DOM Events
////////////////////////

// ! Mouse Event Listeners :: click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout
// ! Input Event Listeners :: keydown, keyup, keypress, focus, blur, copy, cut, paste, input, submit

/*
* mouseenter (recommended) vs mouseover, mouseleave (recommended) vs mouseout:
*
* mouseenter -> triggers when the mouse enters the element on which it is set
*
* mouseover -> triggers when the mouse enters the element or any of its children
*
* mouseleave -> triggers when the mouse leaves the element on which it is set
*
* mouseout -> triggers when the mouse leaves the element or any of its children
*/

// !!! Event -> event.target, event.preventDefault(), event.stopPropagation(), event.contextmenu()

// const headerElem = document.querySelector('#header');
// headerElem.addEventListener('click', function (event) {
//     console.log(event);
// });
