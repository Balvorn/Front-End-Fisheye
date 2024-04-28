import { medias } from "../pages/photographer.js";

let index = 0

const dialog = document.getElementById("lightbox-modal")
const closeButton = document.querySelector(".close")
const leftButton = document.querySelector(".left")
const rightButton = document.querySelector(".right")

dialog.addEventListener("close", () => {
    //avoid keyup event when closing with keyboard
    document.activeElement.blur()
    document.getElementById(index).classList.remove("active")
});

closeButton.addEventListener("click", () => {
    closeLightbox()
});
leftButton.addEventListener("click", () => {
    left()
});

rightButton.addEventListener("click", () => {
    right()
});

// Open the Modal
export function openLightbox() {

    dialog.showModal()
}

// Close the Modal
function closeLightbox() {
    dialog.close()
}

// Next/previous controls
function left() {
    document.getElementById(index).classList.remove("active")
    if (index <= 0) {
        index = medias.length

    }
    showImage(--index);
}

function right() {
    document.getElementById(index).classList.remove("active")
    if (index >= medias.length - 1) {
        index = -1
    }
    showImage(++index);
}

// image control
export function showImage(currIndex) {
    index = currIndex
    document.getElementById(index).classList.add("active")
}