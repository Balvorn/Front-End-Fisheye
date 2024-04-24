import {medias} from "../pages/photographer.js";
export default function mediaTemplate(data) {
    const { title, media, likes, type } = data;
    function getMediaDOM() {
        const img = document.createElement(type)
        img.setAttribute("src", media)
        if(type =="img"){
           img.setAttribute("alt", `${title}, closeup view`) 
        }else{
            img.setAttribute("title", `${title},video closeup view`) 
        }
        img.setAttribute("class", "media")
        img.setAttribute("tabindex", "-1")
        const h2 = document.createElement('h2');
        h2.textContent = title;
        h2.setAttribute("class", "title")

        const like = document.createElement('p');
        const number = document.createElement('span')
        number.textContent = likes
        number.setAttribute("data-liked", "false")
        like.setAttribute("class", "likes focusable")
        like.setAttribute("tabindex", "0")
        
        const icon = document.createElement('span')
        icon.setAttribute("class", "fa-solid fa-heart")

        let article = document.createElement('article');
        article.setAttribute("tabindex", "0")
        article.setAttribute("data-id",medias.indexOf(data))
        article.setAttribute("class", "focusable media-card")
        like.append(number,icon)
        article.append(img, h2, like)   
        return (article);
    }
    return { getMediaDOM }
}