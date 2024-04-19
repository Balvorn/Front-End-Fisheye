import { medias } from "../pages/photographer.js";

let index = 0

const mediaslist = document.querySelector(".medias-list")
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


//event delegation
["click", "keyup"].forEach(ev => {
    mediaslist.addEventListener(ev, HandleMediaEvent);
});

function HandleMediaEvent(e) {
    if (e.type == "click" || e.key == "Enter") {
        let article = e.target.closest("article")
        if (!article) return;
        if (!mediaslist.contains(article)) return;
        console.log(article)
        openLightbox()
        showImage(article.dataset.id)
    }
}

// Open the Modal
function openLightbox() {

    dialog.showModal()
}

// Close the Modal
function closeLightbox() {
    dialog.close()
}

// Next/previous controls
function left() {
    console.log(medias)
    document.getElementById(index).classList.remove("active")
    if (index <= 0) {
        index = medias.length

    }
    showImage(--index);
}

function right() {
    console.log(index)
    document.getElementById(index).classList.remove("active")
    if (index >= medias.length - 1) {
        index = -1
    }
    showImage(++index);
}


// image control
function showImage(currIndex) {
    index = currIndex
    document.getElementById(index).classList.add("active")
}