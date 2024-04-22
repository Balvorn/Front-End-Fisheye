const openBtn = document.querySelector(".open-contact")
openBtn.addEventListener("click", displayModal)

const closeBtn = document.querySelector(".close-contact")
closeBtn.addEventListener("click", closeModal)

const contactForm = document.getElementById("contact_form")

contactForm.addEventListener("submit", function(e){
    e.preventDefault()
    let data = new FormData(contactForm);
    for (let [key, value] of data) {
        console.log(key+" : "+  value)
    }
})

function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.showModal()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.close()
}
