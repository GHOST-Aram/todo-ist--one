import '../styles/styles.css'
import DOMManager from './dom_manager.js'
import Project from './project.js'
import ProjectManager from './project_manager.js'
import Task from './task.js'

// localStorage.clear()
const domManager = new DOMManager()
const projectManager = new ProjectManager()
// console.log(projectManager.getProjects())
window.location.hash =''
//Create Project list container
const projectList = document.createElement('div')
projectList.className = 'flex flex-col gap-2'


function displayNewProject(project){
    
    //Display Default Project
    const container = domManager.createProjectContainer(project.name)
    // Append to list
    projectList.appendChild(container)

    //Display tasks
}
//Dispaly project tasks tasks
function displayTasks(tasks) {
    tasksContainer.innerHTML = ''
    if(tasks && tasks.length > 0){
        tasks.forEach(task =>{
            const taskDiv = domManager.createTaskDiv(task)
            //Btns
            const btns = domManager.createTaskManagementBtns()

            taskDiv.appendChild(btns)
            tasksContainer.appendChild(taskDiv)
        })
    }else{
        //No tasks to display
        const par = document.createElement('p')
        par.className = 'text-slate-200 text-center text-3xl font-medium'
        par.id = 'no-tasks'
        par.textContent = 'No Tasks to Display'
        tasksContainer.appendChild(par)
    }
} 
//cREATE AND APPEND TO DOM FRAMEWORK FOR DISPLAYING PROJECTS 
function displayProjectCredentials(){
    const projectHeader = domManager.createProjectHeader('')
    container.appendChild(projectHeader)
    //Project description and new task btn
    const descNBtnContainer = domManager.createContainer()
    descNBtnContainer.className = 'flex flex-row justify-between items-center w-full'
    //DESCRIPTION
    const projectDescription = domManager.createProjectDescription('')
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
    document.querySelector('#project-description p').textContent = project.getDescription()
}

//Get currenttly displaying project from localstorage
function getCurrentProject(projects){
    const projectName = window.location.hash.substring(1).replaceAll('-', ' ')
    if(projectName)
        return projects.find(project => project.name === projectName)
    else 
        return projects.find(project => project.name === 'Today')
}
    
function renderProjects(projects){
    projectList.innerHTML = ''
    projects.forEach(project => displayNewProject(project))
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
    sidebar.appendChild(projectList)//Container for listing projects

// DEFAULT PROJECT
//Create default Project and add to PromjectManager.Projects
const defaultProject = new Project('Today')
    defaultProject.setDescription('Today\'s Activities')
    projectManager.addToProjectList(defaultProject) //Add to projects
   
    
    //Display default project details
    displayProjectCredentials()
    
    // Tasks container
    const tasksContainer = domManager.createTasksContainer()
    container.appendChild(tasksContainer)
    
    
    //PAGE ONLOAD
    // ___________________________________________________________________
    window.addEventListener('load', (e) =>{
        const projects = projectManager.getProjects()//Get projects
        //Display Project List
        renderProjects(projects)
       
    
    
    
    //DISPLAY PROJECT CREATION FORM
    addBtn.addEventListener('click', (e) =>{
        domManager.displayForm('#project-form')
    })
    //CLOSE FORM ON CANCELL
    document.querySelector('#hide-project-form').addEventListener('click', () =>{
        domManager.hideForm('#project-form')
    })
    //SUBMIT NEW PROJECT
    document.querySelector('form#project-form').addEventListener('submit', (event) =>{
        event.preventDefault()
        const data = domManager.getFormData('#project-form')//Get data
        const project = new Project(data[0])//Create new Project
        project.setDescription(data[1])
        projectManager.addToProjectList(project)//Add to project list

        //Rerender all projects
        
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
        
        
        //Get current project and add task to project tasklist
        const currentProject = getCurrentProject(projects)
        currentProject.addTask(task)//Update project.tasks
        projectManager.updateProject(currentProject)//Update current project
        
        //DISPLAY TASKS
        displayTasks(currentProject.getTasks())
        
        domManager.hideForm('#task-form')
    })
    // addEventListenerToProject()//Add event listener to project every time page is loaded
    //Display Current project
    window.addEventListener('hashchange', () =>{
        const currentProject = getCurrentProject(projects)
        displayCurrentProject(currentProject)
        displayTasks(currentProject.tasks)
    })
    window.dispatchEvent(new Event('hashchange'))
})

/**_____________________________________________________________________________________________________
 *Open Project to view project details 
 * 
 * When Project is clicked, the Dom is populated with project deatails
 * */    

    

    