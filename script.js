var gridSize = parseInt(prompt("Enter a grid size (ex. 16x16):"));
const n = gridSize * gridSize;
console.log(gridSize);
console.log(n);
const sketchFrame = document.querySelector("#frame");

for (i = 0; i < n; i++) {
    const sketchDiv = document.createElement("div");
    sketchDiv.classList.add("sketchDiv");
    sketchDiv.innerHTML = "Test";
    sketchFrame.append(sketchDiv);
}