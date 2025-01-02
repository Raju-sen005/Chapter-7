// ACCESSING CHILDREN BY JS

// First Children//[body ka first children,last children and child nodes ko kaise access kre=>]
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

// kon kya dega =>
// First Child = firstChild Element
// Last Child = lastChild Element
// childNodes =  All Child Nodess

// Agar aap childNodes ko ek array mein conveert karana chahte ho toh =>
let arr = Array.from(document.body.childNodes);
console.log(arr);
