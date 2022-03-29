const button = document.querySelector(".button-container")
const screen = document.querySelector("#screen")

button.addEventListener("click",function(e){

    const buttonClick = e.target
    const buttonValue = buttonClick.innerText

    if(buttonValue == "C"){
        screen.value = ""
    } else if(buttonValue == "←"){
        screen.value = screen.value.slice(0, -1)
    } else if(buttonValue == "="){
        screen.value = eval(screen.value)
    } else{
        screen.value = screen.value + buttonValue
    }
})