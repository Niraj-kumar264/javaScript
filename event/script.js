let box = document.querySelector("div")
box.onmouseover = () => {
    console.log("you are inside the div")
}
// event object
//it is a special object that has the details about the event
//all the event hadler have access to the event objects properties and method.

//eventListner
let btn1 = document.querySelector(".btn1")
btn1.addEventListener("click", (e)=> {
    console.log("button was clicked")
    console.log(e)
    console.log(e.type)
})

btn1.addEventListener("click", ()=> {
    console.log("button was clicked once but event occures twice because of event listner")
})

//Q1) create a toggle button that changes the screen to dark-mode whn clicked and ligit-mode when clicked again
let btn2 = document.querySelector(".btn2")
let currMode = "light"
btn2.addEventListener("click", ()=> {
    if (currMode === "light") {
        currMode = "dark"
        document.querySelector("body").style.backgroundColor = 'black'
        
    } else {
        currMode = 'light'
        document.querySelector("body").style.backgroundColor = "white"
    }
    
})