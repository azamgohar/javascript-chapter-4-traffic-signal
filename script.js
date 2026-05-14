let red = document.querySelector("#red");
let green = document.querySelector("#green");
let yellow = document.querySelector("#yellow");
let headingBox = document.querySelector(".heading_bx");

red.addEventListener("click", function() {
    headingBox.textContent = "Stop!";
})

yellow.addEventListener("click", function() {
    headingBox.textContent = "Ready!";
})

green.addEventListener("click", function() {
    headingBox.textContent = "Go!";
})



let light = prompt("Pick anyone... red, yellow, green");

switch (light) {
    case "red":
        console.log("Stop!");
        headingBox.textContent = "Stop";
        break;
    case "yellow":
        console.log("Ready!");
        headingBox.textContent = "Ready";
        break;
    case "green":
        console.log("Go!");
        headingBox.textContent = "Go";
        break;
}
