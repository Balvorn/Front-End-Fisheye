export default class Video {
    constructor(data) {
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._video = data.video
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._liked = false
    }

    get id() {
        return this._id
    }
    get photographerId() {
        return this._photographerId
    }
    get title() {
        return this._title
    }
    get media() {
        return `assets/images/${this._photographerId}/${this._video}`
    }
    get likes() {
        return this._likes
    }
    get date() {
        return this._date
    }
    get price() {
        return this._price
    }
    get type(){
        return "video"
    }
    get liked(){
        return this._liked
    }
    set liked(value){
        this._liked = value
        if(value){
            this._likes+= 1
        }else{
            this._likes-= 1
        }
    }
}