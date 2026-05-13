// const container = document.querySelector("#container")
// const button = document.querySelector("#button")

// let numberRepear = 25

// while (numberRepear > 0){
//     const divCreation = document.createElement("div")
//     divCreation.classList.add("boxes")

//     container.appendChild(divCreation)
//     numberRepear -= 1
// }



// const smallBoxes = document.querySelectorAll(".boxes")

// smallBoxes.forEach((boxes) => {
//     boxes.addEventListener("mouseover", (event) => {
//         console.log("it was hover overed")

//         boxes.style.backgroundColor = getRandomColor();
//         });
// })




const container = document.querySelector("#container")
const button = document.querySelector("#button")


function originalSize(size) {
    container.innerHTML = "";
    const boxSize = 960 / size;

    for (let eachBox = 0; eachBox < size * size; eachBox++) {
        console.log("Hello there")

        const divCreation = document.createElement("div");
        divCreation.style.width = boxSize + "px";
        divCreation.style.height = boxSize + "px";
        divCreation.style.boxSizing = "border-box";
        divCreation.style.border = "1px solid black";
    
        divCreation.classList.add("box");

        container.appendChild(divCreation)
    }


    let allBoxes = document.querySelectorAll(".box")
        allBoxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
        console.log("I was hovered")
        box.style.backgroundColor = getRandomColor()
    });
});

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
};

originalSize(16)

button.addEventListener("click", () => {
    let size = prompt('Grid limist: 100!')
    size = Number(size)
    if (!size || size > 100 || size <= 0) return;
    originalSize(size)
    console.log(size)
})