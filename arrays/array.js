let marks = [97, 34, 45, 67, 89, 34]
console.log(marks)
console.log(marks.length)
console.log(typeof marks)
// loops over an array
//Q1) craete an array with marks of a  student  and retrive
//  the sum of the marks and then find the avearge of the marks
let sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]

}
console.log(`total marks = ${sum}`)
let avg = sum / marks.length
console.log(`average marks is = ${avg}`)

//Q2) for a given array with prices of 5 items [250,645,300,900,50] 
//all items have an offer of 10% off on them . change the array to store the 
// final price after applying offer
let arr = [250, 645, 300 , 900 , 50]
let discount = 1
let newPrice = []
for (let i = 0; i < arr.length; i++) {
    discount = arr[i]/100*10
    newPrice = [arr[i]-discount]
    console.log(newPrice)
    
}

//or
let item = [250, 645, 300 , 900 , 50]
let offer = 1
for (let i = 0; i < item.length; i++) {
    offer = arr[i]/10
    item[i] = [arr[i]-offer]
    
    
}
console.log(item)

//array methods 
//push(): add to end
arr.push(670)
console.log(arr)
//pop(): delete from end
arr.pop()
console.log(arr)

//toString
console.log(arr.toString())

//unshift(): it used to add an element at the first
arr.unshift(450)
console.log(arr)

//shift(): delete from the start
//slice(): gives a slice or piece of an array, it doesnot change original arry
console.log(arr.slice(1, 5))
console.log(arr)

//splice():it used to change or replace or delete an element of array ,changes the original array
arr.splice(2, 3, 560, 340, 280)
console.log(arr)

//Q3) cretae an array to store companies "bloomberg", "microsoft", "uber", "google", "IBM", "NETFLIX"
//1) remove the first company from the array
//2) remove uber and add ola in its place
//3) add amazon at the end

let companies = ["bloomberg", "microsoft", "uber", "google", "IBM", "NETFLIX"]
companies.splice(0,1)
console.log(companies)
companies.splice(2,1,"ola")
console.log(companies)
companies.push("amazon")
console.log(companies)