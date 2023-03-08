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
    domManager.render(sidebar)

//Content container
const container = domManager.createContainer()
    container.classList.add('bg-blue-700')
    container.id = 'content-container'
    domManager.render(container)

//Footer
const footer = domManager.createFooter()
    sidebar.appendChild(footer)

//User profile
const profile = domManager.createUserProfile('The Architech')
    header.appendChild(profile)
    header.classList.add('flex', 'flex-row', 'justify-between', 'items-center')

    //Import profile pic
    import('../images/profile-pic.png').then(({pic}) =>{
        document.querySelector('#profile-picture').src = pic
    }).catch((error)=>console.error(`Error ocuured while importing profile pic: ${error}`))

