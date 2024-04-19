export default function indexPhotographerTemplate(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        //img.setAttribute("alt", name)

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('p');
        location.textContent = city + ", " + country
        location.setAttribute("class", "location")

        const tag = document.createElement('p');
        tag.textContent = tagline
        tag.setAttribute("class", "tag")

        const rate = document.createElement('p');
        rate.textContent = price + "€/jour"
        rate.setAttribute("class", "rate")

        const link = document.createElement('a');
        link.setAttribute("href", "photographer.html?id=" + id)
        link.setAttribute("class", "focusable")
        link.append(img, h2);

        const article = document.createElement('article');
        article.append(link, location, tag, rate)

        return (article);
    }
    return { name, picture, getUserCardDOM }
}