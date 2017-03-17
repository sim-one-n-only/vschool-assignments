document.getElementById("square1").addEventListener("mouseover", firstFunction);
function firstFunction() {
        document.getElementById("square1").style = "background-color:blue";
}

document.getElementById("square1").addEventListener("mouseout", secondFunction);
function secondFunction() {
    document.getElementById("square1").style = "background-color:purple";
}

document.getElementById("square1").addEventListener("mousedown", thirdFunction);
function thirdFunction() {
    document.getElementById("square1").style = "background-color:red";
}

document.getElementById("square1").addEventListener("mouseup", fourthFunction);
function fourthFunction() {
    document.getElementById("square1").style = "background-color: yellow";
}

document.getElementById("square1").addEventListener("dblclick", fifthFunction);
function fifthFunction() {
    document.getElementById("square1").style = "background-color:green";
}

document.getElementById("body").addEventListener("wheel", sixthFunction);
function sixthFunction() {
    document.getElementById("square1").style = "background-color:orange";
}