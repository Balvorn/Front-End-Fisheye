function mediaTemplate(data) {
    const { title, media, likes, type } = data;

    function getMediaDOM() {
        const img = document.createElement(type)
        img.setAttribute("src", media)
        img.setAttribute("alt", `${title}, closeup view`)
        img.setAttribute("class", "media")

        const h2 = document.createElement('h2');
        h2.textContent = title;
        h2.setAttribute("class", "title")

        const like = document.createElement('p');
        like.textContent = likes
        like.setAttribute("class", "likes")

        const icon = document.createElement('i')
        icon.setAttribute("class", "fa-solid fa-heart")

        const article = document.createElement('article');
        article.setAttribute("class", "media-card")

        const link = document.createElement('a')
        link.setAttribute("href","#")

        like.append(icon)
        link.append(img, h2, like)
        article.append(link)

        return (article);
    }
    return { getMediaDOM }
}