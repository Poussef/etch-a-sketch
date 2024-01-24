const sketchFrame = document.querySelector("#frame");
const frameDimension = 960;
var n = parseInt(prompt("Enter a grid size (ex. 16x16):"));
const sketchSize = frameDimension / n;

var color = "black";
const eraser = document.querySelector(".eraser");
const colorRed = document.querySelector(".red");
const colorBlue = document.querySelector(".blue");
const colorGreen = document.querySelector(".green");
eraser.addEventListener("click", () => 
    color = "white"); 
colorRed.addEventListener("click", () => 
    color = "red"); 
colorBlue.addEventListener("click", () => 
    color = "blue"); 
colorGreen.addEventListener("click", () => 
    color = "green"); 

for (i = 0; i < n; i++) {
    const sketchRow = document.createElement("div"); 
    sketchRow.classList.add("sketchRow");
    sketchRow.style.height = `${sketchSize}px`;
    for (j = 0; j < n; j++) {
        const sketchDiv = document.createElement("div");
        sketchDiv.classList.add("sketchDiv");
        sketchDiv.style.cssText = 
            `height: ${sketchSize}px;
             width: ${sketchSize}px;
        `;
        sketchRow.append(sketchDiv);
    };
    sketchFrame.append(sketchRow);
};

const cDiv = document.querySelectorAll(".sketchDiv");
cDiv.forEach(div => {
    div.addEventListener('mouseover', () => 
        div.style.backgroundColor = `${color}`)
})
