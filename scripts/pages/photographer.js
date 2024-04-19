import  fillHeader from "../templates/page_photographer.js";
import  mediaTemplate from "../templates/media.js";
import  lightboxTemplate from "../templates/lightbox_template.js";
import  MediaFactory from "../factories/mediaFactory.js";
export let medias = []

const selectvalue = document.getElementById("medias-order")
selectvalue.addEventListener("change", (event) => {
    fillMedias(event.target.value)
  });

async function getData() {
    const response = await fetch("https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json");
    const data = await response.json();
    const medias = data.media
    const photographers = data.photographers
    return { photographers: [...photographers], medias: [...medias] }
}

async function displayData(photographer, order) {
    fillHeader(photographer)
    fillMedias(order)
}

function fillMedias(value) {
    
    //descending order on passed value
    medias.sort(function (media1, media2) { return media1[value] < media2[value] })
    //order by titles A -> Z
    if (value === "title") {
        medias.reverse()
    }

    // reset section content
    const mediasSection = document.querySelector(".medias-list");
    const lightbox = document.getElementById("lightbox-list");
    mediasSection.innerHTML = ""
    lightbox.innerHTML = ""
    
    medias.forEach((media) => {
        const mediaModel = mediaTemplate(media);
        const mediaDOM = mediaModel.getMediaDOM();
        mediasSection.appendChild(mediaDOM);

        const lightboxModel = lightboxTemplate(media)
        const lightboxDOM = lightboxModel.getLightboxDOM()
        lightbox.appendChild(lightboxDOM)
    });
}

async function init() {
    // get photographer and medias
    const data = await getData();
    var url = new URL(document.location)
    var id = url.searchParams.get("id");
    
    //get photographer info
    const photographer = data.photographers.find((photographer) => photographer.id == id)

    //filter medias on photographer id
    const photographerMedias = data.medias.filter((media) => media.photographerId == id);

    //pass media & media type to factory
    medias = photographerMedias.map(media => new MediaFactory(media, Object.keys(media)[3]))
    
    let mediaOrder = document.getElementById("medias-order").value
    
    displayData(photographer, mediaOrder)
}


init();