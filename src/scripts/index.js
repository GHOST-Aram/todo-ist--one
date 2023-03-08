import '../styles/styles.css'
import DOMManager from './dom_manager.js'

const domManager = new DOMManager()



// Create and display header
const header = domManager.createHeader()
    const logo = domManager.createLogo('Plansen')
    header.appendChild(logo)
    document.body.prepend(header)

//sidebar
const sidebar = domManager.createSidebar()
    sidebar.appendChild(domManager.createHeading('Plansen'))
    domManager.render(sidebar)

//Content container
const container = domManager.createContainer()
    container.classList.add('bg-blue-700')
    container.id = 'content-container'
    domManager.render(container)
