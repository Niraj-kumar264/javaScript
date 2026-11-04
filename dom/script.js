// selecting element with id

let button = document.getElementById("button")
console.dir(button)

//selecting element with class
let heading = document.getElementsByClassName("heading")
console.dir(heading)

//selecting element with tags
let para = document.getElementsByTagName("p")
console.dir(para)

//query selector
let el = document.querySelector("p") //selecting with tags , select only one element
console.dir(el)

let allel = document.querySelectorAll("p") //select all tags taged with p
console.dir(allel)

//selectig with class name
let head = document.querySelector(".heading")
console.dir(head)

//selectig with id name
let butt = document.querySelector("button")
console.dir(butt)

 document.querySelector("div")

 //Q1) crate a  h2 heading element with text "hello javaScript",
 //  and append "from self paced student" to this text using js

  let hello = document.querySelector(".hello").append(" from self paced student")


 //or
//  let hello = document.querySelector(".hello")
//  hello.innerText = hello.innerText + " from slf paced student"

//Q2) craete 3 divs with common class name "box". 
// access them & add some unique text to each

// let box = document.querySelectorAll(".box")
// console.dir(box)
// box[0].innerText = "new unique value 1"
// box[1].innerText = "new uinque vale 2"
// box[2].innerText = "new uinque vale 3"

//or
let divs = document.querySelectorAll(".box")
let i = 1
for (const div of divs) {
    div.innerText = `new unique value ${i}`
    i++
}

//style
let box = document.querySelector("div")
box.style.backgroundColor = "red"

//insert elements
//1)node.append(el) :- it adds at the end(inside)
let newbtn = document.createElement("button")
newbtn.innerText = ("click me")

box.append(newbtn)
//2) node.prepend(el):- add at the start of the node(inside)
let tail = document.createElement("h5")
tail.innerText = ("hii i am created usig javaScript")
box.prepend(tail)
//3)node.before(el):- add before the node (outside)
//4)node.after(el):- add after the node

//Node.remove():- removes the node

//Q3) create a <P> tag in html, give it a class and some styling. 
// now create a new class i css and try to append this to <p> element. 
// did you notice, how you overwrite the class name when yo adda new one.
//solve ths problem using classList

let content = document.querySelector(".prop")
// content.setAttribute("class", "newClass")
content.classList.add("newClass")