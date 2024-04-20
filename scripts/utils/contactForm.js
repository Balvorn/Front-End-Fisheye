const openBtn = document.querySelector(".open-contact")
openBtn.addEventListener("click", displayModal)

const closeBtn = document.querySelector(".close-contact")
closeBtn.addEventListener("click", closeModal)

const sendBtn = document.querySelector(".send_button")

sendBtn.addEventListener("click", function(){
    let form = document.getElementById('contact_form');
    let data = new FormData(form);
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
