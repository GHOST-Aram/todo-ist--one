import '../styles/styles.css'
import DOMManager from './dom_manager.js'

const domManager = new DOMManager()


// Create and display header
const header = domManager.createHeader()
    const logo = domManager.createLogo('Plansen')
    header.appendChild(logo)
    header.classList.add('m-auto', 'mx-4', 'rounded-top', 'rounded-md')
    document.body.prepend(header)