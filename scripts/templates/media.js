function mediaTemplate(data) {
    const { title, media, likes } = data;

    function getMediaDOM() {

        const img = document.createElement("img");
        img.setAttribute("src", media)
        img.setAttribute("alt", `${title}, closeup view`)
        img.setAttribute("class", "media")

        const h2 = document.createElement('h2');
        h2.textContent = title;
        h2.setAttribute("class", "title")

        const like = document.createElement('p');
        like.textContent = likes
        const icon = document.createElement('i')
        like.setAttribute("class", "likes")
        icon.setAttribute("class", "fa-solid fa-heart")
        like.appendChild(icon)
        const article = document.createElement('article');
        article.append(img, h2, like)

        return (article);
    }
    return { getMediaDOM }
}