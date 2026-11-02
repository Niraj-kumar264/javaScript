function myFunction() {
    console.log("welcome to js world")
}
myFunction()

//Q1) write a function to add two numbers
function sum(a,b) {
    console.log(a+b)
}
sum(5,6)

//arrow functions 
const arthmatic = (a, b) => {
    console.log(`sum of two numbers are = ${a+b}`)
    console.log(`multiplication of two numbers are = ${a*b}`)
    console.log(`subtraction of the two number are${a -b}`)
    console.log(`division of two numbers are${a/b}`)
}
arthmatic(5,7)

//Q2) create a function that takes a string as an argument
//  and return the number of vowels in the string

function intake() {
   let w = prompt("enter a string")
   let count = 0
   for (const char of w) {
    if (char == "a" || char=="e" || char=="i" || char=="o" || char=="u" ){
        count++
    }
   }
   console.log(count)
}

//for-each loop
let city = ["pune", "delhi", "mumbai", "hazaribag", "ranchi"]
city.forEach(val => {
    console.log(val.toUpperCase())
});

//Q3) for a give array of numbers, print the sqare of each values using the foreach loop
let square = [1, 2, 3, 4, 5, 6]
// square.forEach(val => {
//     console.log(val*val)
// });

//map:- it create a new array with the results of some operation. 
// the value its callback returns are used to form new array

let newArr = square.map((val) => {
    return val * val
})
console.log(newArr)
console.log(square)

//filtre

let even = square.filter((val)=>{
    return val%2 === 0
})
console.log(even)

//q4) we are give array of marks of students. filter out the marks of the students that score more than 90.
let marks = [68, 78, 98 ,93 ,45 ,35,67,91, 98]
let num = marks.filter((val) => {
    return val>90
})
console.log(num)

//Q5) take a number n as input from a user. 
// a) create an array of numbers from 1 to n.
//b) use the reduce method to calculate sum of all numbers in array
//c) use the reduce method to calculate productof all numbers in array

let n = prompt("enter the number")
arr=[]
for (let i =1;  i <= n; i++) {
     arr[i-1] = i;
    
}
console.log(arr)

console.log("finding sum using reduce method")
let add = arr.reduce((res, curr) => {
    return res+curr
})
console.log(add)

console.log("finding mutilplication using reduce method")
let multi = arr.reduce((res, curr) => {
    return res*curr
})
console.log(multi)