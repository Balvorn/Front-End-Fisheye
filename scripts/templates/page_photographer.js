export default function fillHeader(data) {
    const { name, portrait, city, country, tagline } = data;

    const contactInfo = document.querySelector(".photographer-name")
    const picture = `assets/photographers/${portrait}`;
    const htmlName = document.getElementById('name')
    const htmlTagline = document.getElementById('tagline')
    const htmlLocation = document.getElementById('location')
    const htmlPicture = document.getElementById('picture')

    contactInfo.textContent = name
    htmlName.textContent = name;
    htmlLocation.textContent = city + ", " + country
    htmlTagline.textContent = tagline
    htmlPicture.setAttribute("src", picture)
    htmlPicture.setAttribute('alt', "")
}