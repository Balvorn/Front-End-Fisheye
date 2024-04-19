import Video from "../models/Video.js"
import Img from "../models/Img.js"
export default class MediaFactory {
    constructor(data, type) {
        if (type === 'image') {
            return new Img(data)
        } else if (type === 'video') {
            return new Video(data)
        } else {
            throw 'Unknown type format'
        }
    }
}