const container = document.querySelector("#container")

let numberRepear = 25

while (numberRepear > 0){
    console.log("Hello there")
    const divCreation = document.createElement("div")
    divCreation.setAttribute("id", "boxes")
    // divCreation.textContent = "."
    container.appendChild(divCreation)
    numberRepear -= 1
}