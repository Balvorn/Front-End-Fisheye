class MediaFactory {
    constructor(data, type) {
        if (type === 'image') {
            return new Image(data)
        } else if (type === 'video') {
            return new Video(data)
        } else {
            throw 'Unknown type format'
        }
    }
}