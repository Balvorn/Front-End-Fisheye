const openBtn = document.querySelector(".open-contact")
openBtn.addEventListener("click",displayModal)

const closeBtn = document.querySelector(".close-contact")
closeBtn.addEventListener("click",closeModal)

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
export {displayModal,closeModal}
