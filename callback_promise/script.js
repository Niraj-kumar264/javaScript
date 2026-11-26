//synchornous programing :- runs in sequence 

console.log("one")
console.log("two")
console.log("three")
console.log("four")

// asynchronous programing 
console.log("one")
console.log("two")
setTimeout(()=> {
    console.log("three")
}, 2000)
console.log("four")
console.log("five")

//callback: a callback is a function passed as an argument to another function
function sum(a,b) {
    console.log(a+b)
}

function calculator(a,b , sum) {
    sum(a,b)
}

calculator(1,2, sum)

// //promises: promise is a eventual completion of task. it is an object in js. its a solution of callback hell.
const getPromise =() => {
return new Promise((resolve, reject) => {
    console.log("hii i am promise")
    resolve("success")
});
}

let promise = getPromise()
promise.then((res)=> {
    console.log("promise fullfilled", res)
})

let promise2 = new Promise((resolve, reject) => {
    console.log("hii i am promise2")
    reject("some error occured during featching data")
    
});

promise2.catch((err)=> {
    console.log("invalid data", err)
})

// promise chaining
function fun1 () {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data1")
            resolve("success")
        }, 4000)
    })
}

function fun2 () {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data2")
            resolve("success")
        }, 4000)
    })
}

console.log("fetching data1....")
let p1 = new fun1()
p1.then((res)=> {
    console.log(res)
    
    console.log("featching data2")
    let p2 = new fun2()
    p2.then((res)=> {
        console.log(res)
    })
})


//async_await: async function always returns a promise. 
// await pauses the excution of its surrounding async function until the promise is settled
 function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("finance data ")
            resolve(200)

        },2000)
    })
 }

 async function getFinData() {
    await api();
    await api();
 }
