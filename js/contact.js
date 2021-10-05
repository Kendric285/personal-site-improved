let input = document.getElementById("message")
let button = document.querySelector("button")

button.onclick = function(){
    console.log(input.value)
    input.value = ""
}