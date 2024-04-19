import {medias} from "../pages/photographer.js";
export default function lightboxTemplate(data) {
    const { title, media, type } = data;

    function getLightboxDOM() {
        const mediasrc = document.createElement(type)

        if (type === "video") {
            mediasrc.setAttribute("controls", "controls")
            mediasrc.setAttribute("autoplay", "autoplay")
            mediasrc.setAttribute("autoplay", "autoplay")
            const source = document.createElement("source")
            source.setAttribute("src", media)
            source.setAttribute("type", "video/mp4")
            mediasrc.append(source)
        } else {
            mediasrc.setAttribute("src", media)
            mediasrc.setAttribute("alt", `${title}, closeup view`)
        }
        mediasrc.setAttribute("class", "lightbox-media")

        const h2 = document.createElement('h2');
        h2.textContent = title;
        h2.setAttribute("class", "title")

        const article = document.createElement('article');
        article.setAttribute("class", "lightbox-article")
        article.setAttribute("id", medias.indexOf(data))
        article.append(mediasrc, h2)
        return (article);
    }
    return { getLightboxDOM }
}