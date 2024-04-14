let medias

async function getData() {

    const response = await fetch("https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json");
    const data = await response.json();
    const medias = data.media
    const photographers = data.photographers
    return { photographers: [...photographers], medias: [...medias] }
}

async function displayData(photographer, medias) {

    fillHeader(photographer)

    fillMedias(medias)

}

function fillMedias(medias) {
    const mediasSection = document.querySelector(".medias-list");

    // reset section content
    mediasSection.innerHTML = ""

    //
    medias.forEach((media) => {
        const mediaModel = mediaTemplate(media);
        const mediaDOM = mediaModel.getMediaDOM();
        mediasSection.appendChild(mediaDOM);
    });
}

async function init() {
    // get photographer and images/videos
    const data = await getData();

    var url = new URL(document.location)
    var id = url.searchParams.get("id");

    //get photographer info
    const photographer = data.photographers.find((photographer) => photographer.id == id)

    //filter medias on photographer id
    const photographerMedias = data.medias.filter((media) => media.photographerId == id);

    //pass media & media type to factory
    medias = photographerMedias.map(media => new MediaFactory(media, Object.keys(media)[3]))
    orderBy("likes")
    displayData(photographer, medias)
}

function orderBy(value) {

    //descending order on passed property
    medias.sort(function(media1, media2){return media1[value] < media2[value]})

    //ascending order
    if(value === "title"){
        medias.reverse()
    }

    fillMedias(medias)
}

init();