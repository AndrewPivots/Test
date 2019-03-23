// You know you need to practice symbols when you don't undertstand much of the first paragraph on mdn haha: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

const num1 = 5;
const num2 = 5;
num1 === num2 // true

const sym1 = Symbol('banana');
const sym2 = Symbol('banana');
sym1 === sym2 // false

const obj1 = new Object();
const obj2 = new Object();
obj1 === obj2 // false

/*
For 3-13
Questions
- Is it really all about values?
- How are symbol values always different?
- Isn't this just another example of how two objects will never be the same because they are two?
- Do I just need to understand data types, primitives, immutables better?
- So how is a symbol any different from an object?
Answers
- Looks objects are not primitive by default and ES6 made symbols the answer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
*/
