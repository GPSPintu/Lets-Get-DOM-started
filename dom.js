//GETELEMENTSBYCLASSNAME//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontweight = 'bold';
items[1].style.backgroundColor = 'yellow';
                                  
                                       //DOCUMENT OBJECT MODEL//

/*The Document Object Model (DOM) for the given HTML structure would look something like this:

The head element would be represented as an object in the DOM tree with a node type of "element". It would have a tag name of "head" and no attributes.

The h1 element, which is a child of the head element, would also be represented as an object in the DOM tree with a node type of "element". It would have a tag name of "h1" and no attributes.

The text inside the h1 tag, "Title", would be represented as a separate object in the DOM tree with a node type of "text".

The body element, which is a sibling of the head element, would also be represented as an object in the DOM tree with a node type of "element". It would have a tag name of "body" and no attributes.

The first input element, which is a child of the body element, would be represented as an object in the DOM tree with a node type of "element". It would have a tag name of "input" and two attributes: "type" with a value of "text", and "name" with a value of "Name".

The second input element, which is also a child of the body element, would be represented similarly to the first input element, with a tag name of "input", a "type" attribute with a value of "button", and a "value" attribute with a value of "Submit".

In summary, the DOM tree for this HTML structure would consist of two elements, "head" and "body", with the text "Title" inside the "h1" element, and two "input" elements inside the "body" element.*/