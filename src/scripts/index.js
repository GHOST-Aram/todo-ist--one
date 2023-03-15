import '../styles/styles.css'
import DOMManager from './dom_manager.js'
import Project from './project.js'
import ProjectManager from './project_manager'
import Task from './task'
import TaskManager from './task_manager'

// localStorage.removeItem('projects')
const domManager = new DOMManager()
const projectManager = new ProjectManager()

window.location.hash =''
//Create Project list container
const projectList = document.createElement('div')
projectList.className = 'flex flex-col gap-2'


function displayNewProject(project){
    
    //Display Default Project
    const container = domManager.createProjectContainer(project.name)
    // Append to list
    projectList.appendChild(container)
    
    // addEventListenerToProject()
}
//Dispaly project tasks tasks
function displayTasks(tasks) {
    tasksContainer.innerHTML = ''
    tasks.forEach(task =>{
        const taskDiv = domManager.createTaskDiv(task)
        tasksContainer.appendChild(taskDiv)
    })
} 
//cREATE AND APPEND TO DOM FRAMEWORK FOR DISPLAYING PROJECTS 
function displayProjectCredentials(project){
    const projectHeader = domManager.createProjectHeader(project)
    container.appendChild(projectHeader)
    //Project description and new task btn
    const descNBtnContainer = domManager.createContainer()
    descNBtnContainer.className = 'flex flex-row justify-between items-center w-full'
    //DESCRIPTION
    const projectDescription = domManager.createProjectDescription(project.getDescription())
    projectDescription.id = 'project-description'
    //Display description
    descNBtnContainer.appendChild(projectDescription)
    
    //  New task button
    const button = document.createElement('button')
    button.textContent = 'New Task'
    button.className = 'bg-slate-300 text-blue-700 py-2 px-4 rounded-md hover:bg-slate-100'
    button.id = 'new-task-btn'
    
    //Display btn
    descNBtnContainer.appendChild(button)
    container.appendChild(descNBtnContainer)
    
}


// Zreate container for a single task
// Div contains task informatiion

function displayCurrentProject (project) {
    document.querySelector('#content-container #project-name').textContent = project.name
    document.querySelector('#project-description p').textContent = project.description
}

//Get currenttly displaying project from localstorage
function getCurrentProject(){
    const projects = projectManager.accessLocalStorage()
    const projectName = window.location.hash.substring(1).replaceAll('-', ' ')
    if(projectName)
        return projects.find(project => project.name === projectName)
    else 
        return projects.find(project => project.name === 'Today')
}

//REMOVE PROJECT
function removeProject(projects, project){
    const filteredProjects =  projects.filter(item =>{item !== project})
}
//Store project in local storage
function saveProject (project) {
    projectManager.addToProjectList(project.toJSON())
    projectManager.updateLocalStorage()
    
}
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
container.classList.add('bg-blue-700', 'flex','flex-col', 'items-start', 'justify-start', 'gap-2')
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

    //Projects header
    const projectsHeader = domManager.createContainer()
    projectsHeader.className = 'flex flex-row items-center justify-between bg-blue-600 px-4 py-2'
    projectsHeader.id = 'projects-header'

    //Heading
    const heading = domManager.createHeading('My Projects')
    heading.classList.add('font-medium', 'w-full')
    projectsHeader.appendChild(heading)
    
    // New project Add button
    const addBtn = domManager.createAddButton()
    addBtn.id = 'new-project-btn'
    projectsHeader.appendChild(addBtn)
    
    sidebar.appendChild(projectsHeader) 

//Create default Project
const defaultProject = new Project('Today')
    defaultProject.setDescription('Today\'s Activities')
    projectManager.addToProjectList(defaultProject.toJSON()) //Add to projects
    displayNewProject(defaultProject)
    sidebar.appendChild(projectList)
    
    //Display default project details
    displayProjectCredentials(defaultProject)

    // Tasks container
     const tasksContainer = domManager.createTasksContainer()
     container.appendChild(tasksContainer)

    
//Create new Project
// ___________________________________________________________________
window.addEventListener('load', (e) =>{
    
    //Access and display projects from localstorage
    const projects = projectManager.accessLocalStorage()
    console.log(projects)
    if(Array.isArray(projects)){
        projectList.innerHTML = ''
        projects.forEach(project =>{
            displayNewProject(project)
        })
    }
    else{
        projectManager.updateLocalStorage()
    }

    //Create new Project
    addBtn.addEventListener('click', (e) =>{
        //project manager create new project
        domManager.displayForm('#project-form')
        //Close form on CANCELL
        document.querySelector('#hide-project-form').addEventListener('click', () =>{
            domManager.hideForm('#project-form')
        })
    })
    //Add event listener to form
    document.querySelector('form#project-form').addEventListener('submit', (event) =>{
        event.preventDefault()
        const data = domManager.getFormData('#project-form')//Get data
        const project = new Project(data[0])//Create new Project
        project.setDescription(data[1])
        saveProject(project) //Add to project list and update localStorage
        displayNewProject(project)//Display Project container
        domManager.hideForm('#project-form') //hide project form
    })

    //NewTask
    document.querySelector('#new-task-btn').addEventListener('click', () =>{
        domManager.displayForm('#task-form')
    })
    //Hide form on btn click
    document.querySelector('#hide-task-form').addEventListener('click', () =>{
        domManager.hideForm('#task-form')
    })
    //Create task
    document.querySelector('#task-form').addEventListener('submit', (e) =>{
        e.preventDefault()
        //get data
        const input = domManager.getFormData('#task-form')
        // Create new task
        const task = new Task(input[0])
            task.setDescription(input[1])
            task.setDueDate(input[2])
            const taskJSON = task.toJSON()// Covert task to JSON

        //Get current project and add task to project tasklist
        const currentProject = getCurrentProject()
            let projects = projectManager.accessLocalStorage()
            projects = projects.filter(project =>{project !== currentProject})//Remove current project
            currentProject.tasks.push(taskJSON)//Update project.tasks
            projects.push(currentProject) //push updated project
            window.localStorage.setItem('projects', JSON.stringify(projects))//Update localstorage


        // DISPLAY TASKS

        
        domManager.hideForm('#task-form')
    })
    // addEventListenerToProject()//Add event listener to project every time page is loaded
})
//Display Current project
window.addEventListener('hashchange', () =>{
    const currentProject = getCurrentProject()
    displayCurrentProject(currentProject)
})
window.dispatchEvent(new Event('hashchange'))

/**_____________________________________________________________________________________________________
 *Open Project to view project details 
 * 
 * When Project is clicked, the Dom is populated with project deatails
 * */    

   
    

    