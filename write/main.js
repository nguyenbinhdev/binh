const write = document.querySelector(".container");
write.setAttribute("contenteditable", "true");
const nav = document.querySelector(".nav");
const colorContainer = document.querySelector(".color-container");
nav.addEventListener("click", () => {
    colorContainer.classList.toggle("active");
});
const box = document.querySelectorAll("li");
for (let i = 0; i < box.length; i++) {
    const color = box[i].getAttribute("data-color");
    box[i].style.background = color;
    box[i].addEventListener("click", () => {
    if (color != "white" && color != "black" && color != "#05828a") {
        document.body.style.color = color;
        nav.style.color = color;
    }
    if (color === "white") {
        document.body.style.background = color;
        colorContainer.style.background = "black";
        nav.style.background = "white";
    }
    if (color === "black") {
        document.body.style.background = color;
        colorContainer.style.background = "#05828a";
        nav.style.background = "black";
    }
    if (color === "#05828a") {
        document.body.style.background = color;
        colorContainer.style.background = "#333";
        nav.style.background = "#05828a";
    }
    });
}
