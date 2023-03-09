import '../styles/styles.css'
import DOMManager from './dom_manager.js'
import Project from './project.js'

const domManager = new DOMManager()



// Create and display header
const header = domManager.createHeader()
    const logo = domManager.createLogo('Plansen')
    header.appendChild(logo)
    document.body.prepend(header)

//sidebar
const sidebar = domManager.createSidebar()
    domManager.render(sidebar)
    sidebar.id = 'main-side-bar'

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
    import('../images/profile-pic.png').then(({default:pic}) =>{
        document.querySelector('#profile-picture').src = pic
    }).catch((error)=>console.error(`Error ocuured while importing profile pic: ${error}`))

//Side bar components
const heading = domManager.createHeading('My Projects')
    heading.classList.add('text-blue-700', 'bg-slate-200', 'py-1','px-1','font-medium', 'w-full', 'rounded-top', 'rounded-md')
    heading.classList.remove('text-slate-200')
    sidebar.appendChild(heading) 

//Default Project Container
const defaultProjectContainer = domManager.createProjectContainer('Today')
    sidebar.appendChild(defaultProjectContainer)

    const defaultProjectContaine = domManager.createProjectContainer('Today')
    document.querySelector('#main-side-bar').appendChild(defaultProjectContaine)
    const defaultProjectContain = domManager.createProjectContainer('Today')
    document.querySelector('#main-side-bar').appendChild(defaultProjectContain)
    const defaultProjectContai = domManager.createProjectContainer('Today')
    document.querySelector('#main-side-bar').appendChild(defaultProjectContai)
    const defaultProjectCont = domManager.createProjectContainer('Today')
    document.querySelector('#main-side-bar').appendChild(defaultProjectCont)
    const defaultProjectCon = domManager.createProjectContainer('Today')
    document.querySelector('#main-side-bar').appendChild(defaultProjectCon)
    const defaultProjectC = domManager.createProjectContainer('Today')
    document.querySelector('#main-side-bar').appendChild(defaultProjectC)
    const defaultProject = domManager.createProjectContainer('Today')
    document.querySelector('#main-side-bar').appendChild(defaultProject)
    const defaultProjec = domManager.createProjectContainer('Today')
    document.querySelector('#main-side-bar').appendChild(defaultProjec)
    const defaultProje = domManager.createProjectContainer('Today')
    document.querySelector('#main-side-bar').appendChild(defaultProje)
    

    