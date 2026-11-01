let str = "hello world"
console.log(str)
// length of string
console.log(str.length)
console.log(str[2])

//templete literals :- this is a way to embade anexpressions in a string
// same as a string but created using ``
// crating an object
let obj = {
    item: "pen",
    price: 10,
};
console.log("the cost of the ", obj.item, "is", obj.price, "rupess")

//using templete literals
let output = `the cost of ${obj.item} is ${obj.price} rupees`
console.log(output)

//string interpolation :- to crete string by doing substition og placeholders
// `string text ${expression}string text`


//Q1) prompt the user to enter their full name. 
// genertate a username for them based on their input.
//  start username with a @ , followed by their full name 
// and ending with the fullname length.

let firstName = prompt("please enter your first name")
let lastName = prompt("enter your last name")
let fullName = firstName.concat(lastName)
let userName = `@${fullName}${fullName.length}`
console.log(userName)