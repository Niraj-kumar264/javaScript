//object
let student = {
    fullName: 'Rahul',
    marks: 64,
    printMarks: function () {
        console.log('marks = ',this.marks)
    }
}

let newStudent = {
    fullName: "rohan",
    marks: 87,

}

//set prototype
newStudent.__proto__ = student

//class

class Car {
    start() {
        console.log('car start')
    }

    stop () {
        console.log("car stopped")
    }

    setBrand(brand) {
        this.brand = brand
    }

    //constuctor
    constructor() {
        console.log("creating a new car")
    }
}

let fortuner = new Car()
fortuner.setBrand('Tyota')

let thar = new Car()
thar.setBrand("mahindra")

//inheritance

class Parent {
hello () {
    console.log('hello')
}
}
class child extends Parent {

}
let children = new child