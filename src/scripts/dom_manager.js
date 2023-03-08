export default class DOMManager {
    constructor () {

    }
    setBackgroundImage(image){
        document.body.style.backgroundImage = image
        document.body.style.height = '100vh'
    }
}