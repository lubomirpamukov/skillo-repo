
## Searching in the whole document.

-  I can select element using the document.querySelector("[element type]") => return single element
-  I can select collection of elements using document.querySelectorAll("[element type]") => returns all the elements of this type
-  I can select element by their id with document.getElementById(id)
-  I can select elements in a group by their class name document.getElementsByClassName(className) returns collection of html elements.
-  I can select elements by tagName document.getElementsByTagName(tagName) returns html collection fo elements.



## Searching in an element

 - I can look in an element for nested element with a specific selector with element.querySelector(seletor)
 - I can look in an element for all nested elements with a specific selector element.querySelectorAll(selector)



## Text area

- `document.querySelect('textarea)` selects the first text area.
- `document.querySelectAll('textarea)` selects all text areas elements.
- `textarea.value` gets the value of the text area 
- `textarea.value = 'new value'` sets the text area value
- I can set attributes the the textarea with `textarea.setAttributes('value', 'new text)`
- I can get the textarea attribute value with `textarea.getAttributes('value')`
- I can simulate user click by using `textarea.focus()`
- I can simulate user clicks away from the textarea with `textarea.blur()`
- I can  check if textarea is disabled  with `textarea.disabled` returns boolean
- I can toggle textarea with `textarea.disabled = true/ false`;
- I can check if textarea is readOnly with `textarea.readOnly` returns boolean;
- I can toggle text area readOnly with `textarea.readOnly = true / false`
- I can simulate input event with `textarea.dispatchEvent(new Event('input'))` useful for simulating typing

---

## Creating and Removing elements

- I can create my own elements with `document.createElement('tagName')`
  `let myElement = document.createElement('p')`

- I can nest elements inside other elements:
   `let chilElement = document.createElement('p')`
    `myElement.appendChild(childElement)`

- I can remove child element from parent element with:
    `myElement.removeChild(childElement)`

- I can insert child elements in speficif places with insertBefore:
    `let child2 = document.createElement('h2')`

 - `myElement.insertBefore(child2, childElement)` => 1 param the element we want to insert, 2 param the element we want to insert it before.

- I can replace nested elements with replaceChild
    `myElement.replaceChild(child2, childElement)` => 1 param the new element, 2 param element we want to remove

## Modify element content
- `myElement.innerHTML` returns a string representation of the elements inside the element.
- I can assign a new HTML content with `myElement.innerHTML = '[new element structure]'`
 
- I can get and set element text content with `myElement.textContent = 'new text'` `important this will show/change only string content in the element cant change element children structure` 


## Event handling
- I can add event listeners to elements:
- `myElement.addEventListener('click', handler) => param 1 ('click')` is the type of event the listener will lsiten for, param 2 (handler) is the function wich will be executed when the element is clicked

- I can remove events with `myElement.removeEventListener('click', handler) => param 1 ('click')` is the type of event the listener will remove, param 2 (handler) is the function wich will be deleted.

Most used types of events are : ***['click', 'submit', 'change', 'input', 'keydown', 'mouseover', 'load']**

## Form controls

- I can check if a checkbox is clicked or not with `myElement.checked`
- `let checkbox = document.createElement('input')` => create the element
- `checkbox.setAttribute('type', 'checkbox')` => transforming the input to checkbox

now i can set/get the status of the checkbox with  checkbox.chekded

## Traversing the dom
- `element.parrentNode` => returns me the parent elements of the element
- `element.children` => retruns HTML collection with all the children of the element
- `element.firstElementChild` => returns the top/first child of the element
- `element.lastElementChild` => returns the last/bottom child of the element
- `element.nextElementSibling` => returns the next element that is sibling to our element
- `element.previouseElementSibling` => retuns the previouse sibling element of our element
- `element.loses(selector)` => returns the closes element with the provided selector to our element
