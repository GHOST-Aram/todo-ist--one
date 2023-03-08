export default class DOMManager {
    constructor () {

    }
   createHeader(){
        const header = document.createElement('header')
        header.className = 'p-4 bg-blue-700'
        return header
   }
   createHeading(text){
        const heading = document.createElement('h1')
        heading.className = 'text-xl text-slate-200'
        heading.textContent = text

        return heading
   }
   createLogo(text){
        const logo = this.createHeading(text)
        logo.classList.remove('text-xl')
        logo.classList.add('text-2xl','font-bold','text-center')

        return logo
   }
}