//simple for loops
for (let index = 0; index < 5; index++) {
    console.log("hii this a an example of simple for loop");
    
}

//calculate the sum of n digits
// let a = prompt("enter the nth term")
// let sum = 0;
// for (let i = 0; i <= a; i++) {
//     sum = sum + i;

    
// }
// console.log(sum);

//while loops
let i = 0;
while (i<10) {
    console.log("hii i am simple while loops")
    i++
}

// do while loops
i = 0
do {
    console.log("hii i iam simple do while loop`s do")
    console.log(i)
i++
} while (i<15);

//for-of-loop
let str = "wearhousing"
for (const i of str) {
    console.log(i)
}

//for-in-loop
let student = {
    name: "rahul kumar",
    age: 20,
    cgpa: 8.2,
    ispass: true
}

for (const key in student) {
    console.log("key =", key, "value", student[key]) 
}

//practice questions
//Q1) print all even numbers from 0 to 100
for (let i = 0; i <=100; i++) {
    if (i%2 == 0) {
        console.log(i)
    }
    
}

//Q2)  create a number gassing game , keep asking number to user until it entered the right number
let num = 56;
let userNum = prompt("guess the game number")
while(userNum != num) {
    userNum = prompt("you enterd wrong number. guess again")
}
console.log("you got it")