import { medias } from "../pages/photographer.js";
import { openLightbox, showImage } from "../utils/lightbox.js";


export default function mediaTemplate(data) {
    const { title, media, likes, type } = data;
    function getMediaDOM() {
        const mediaTag = document.createElement(type)

        mediaTag.setAttribute("src", media)
        if (type == "img") {
            mediaTag.setAttribute("alt", `${title}, closeup view`)
        } else {
            mediaTag.setAttribute("title", `${title},video closeup view`)
        }

        mediaTag.setAttribute("class", "media")
        mediaTag.setAttribute("tabindex", "-1")
        const h2 = document.createElement('h2');
        h2.textContent = title;
        h2.setAttribute("class", "title")

        const number = document.createElement('span')
        number.textContent = likes

        const icon = document.createElement('span')
        icon.setAttribute("class", "fa-solid fa-heart")
        
        const like = document.createElement('p');
        like.setAttribute("class", "likes focusable")
        like.setAttribute("tabindex", "0")
        like.append(number, icon);
        ["click", "keyup"].forEach(ev => {
            like.addEventListener(ev, HandleLikeEvent);
        });

        let article = document.createElement('article');
        article.setAttribute("tabindex", "0")
        article.setAttribute("data-id", medias.indexOf(data))
        article.setAttribute("class", "focusable media-card")
        article.append(mediaTag, h2, like);

        ["click", "keyup"].forEach(ev => {
            article.addEventListener(ev, HandleMediaEvent);
        });

        return (article);

        function HandleMediaEvent(e) {
            if (e.type == "click" || e.key == "Enter") {
                openLightbox()
                showImage(article.dataset.id)
            }
        }

        function HandleLikeEvent(e) {
            if (e.type == "click" || e.key == "Enter") {
                e.stopPropagation();
                const totalLikes = document.querySelector(".total-likes-number")
                if (data.liked) {
                    data.liked = false
                    totalLikes.textContent = Number(totalLikes.textContent) - 1
                } else {
                    data.liked = true
                    totalLikes.textContent = Number(totalLikes.textContent) + 1
                }
                number.textContent = data.likes
            }
        }
    }
    return { getMediaDOM }
}
