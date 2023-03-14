import '../styles/styles.css'
import DOMManager from './dom_manager.js'
import Project from './project.js'
import ProjectManager from './project_manager'
import Task from './task'
import TaskManager from './task_manager'

// localStorage.removeItem('projects')
const domManager = new DOMManager()
const projectManager = new ProjectManager()


//Create Project list container
const projectList = document.createElement('div')
projectList.className = 'flex flex-col gap-2'


function addEventListenerToProject(){
    const projects = document.querySelectorAll('.project')
    projects.forEach(
        element =>{
            element.addEventListener('click', (e) =>{
                console.log('clicked')
                //populate DOM with project details
                projectManager.accessLocalStorage().forEach(project =>{
                    //use project name and DOM element id to find project to display
                    if(project.name.toLowerCase().replaceAll(' ', '-') === e.target.id){
                        //Change values
                        document.querySelector('#content-container #project-name').textContent = project.name
                        document.querySelector('#project-description p').textContent = project.getDescription()
                    }
                })
            })
        }
    )
}
function displayNewProject(project){
    
    //Display Default Project
    const container = domManager.createProjectContainer(project.name)
    // Append to list
    projectList.appendChild(container)
    
    addEventListenerToProject()
}
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
    
    function displayTasksContainer(){
     //Tasks container
     const tasksContainer = domManager.createContainer()
     tasksContainer.classList.add('w-full', 'bg-blue-600', 'grid', 'grid-2', 'gap-4')
     tasksContainer.id = 'task-container'

     //No tasks to display
     const par = document.createElement('p')
     par.className = 'text-slate-200 text-center text-3xl font-medium'
     par.id = 'no-tasks'
     par.textContent = 'No Tasks Listed Here'
     tasksContainer.appendChild(par)

     container.appendChild(tasksContainer)
}
function saveProject (project) {
    projectManager.addToProjectList(project)
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
    projectManager.addToProjectList(defaultProject) //Add to projects
    displayNewProject(defaultProject)
    sidebar.appendChild(projectList)

    //Display default project details
    displayProjectCredentials(defaultProject)
    displayTasksContainer()
    console.log(projectManager.accessLocalStorage())

    
//Create new Project
// ___________________________________________________________________
window.addEventListener('load', (e) =>{
    
    //Access and display projects from localstorage
    const projects = projectManager.accessLocalStorage()
    console.log('Local storage on load')
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
        //Get data
        const data = domManager.getFormData('#project-form')
        //Create new Project
        const project = new Project(data[0])
        project.setDescription(data[1])
        
        //Add to project list and update localStorage
        saveProject(project)
        console.log('Projo')
        console.log(projectManager.getProjects())
        console.log('Locakls')
        console.log(projectManager.accessLocalStorage())

        //Display Project container
        displayNewProject(project)
        //hide project form
        domManager.hideForm('#project-form')
    })

    //NewTask
    document.querySelector('#new-task-btn').addEventListener('click', () =>{
        domManager.displayForm('#task-form')
        //Hide form on btn click
        document.querySelector('#hide-task-form').addEventListener('click', () =>{
            domManager.hideForm('#task-form')
        })
        //Create task
        document.querySelector('form#task-form').addEventListener('submit', (e) =>{
            e.preventDefault()
            //get data
            const data = domManager.getFormData('#task-form')

            //New task
            const task = new Task(data[0])
            task.setDescription([data[1]])
            task.setDueDate(data[2])

            //Add to task list
            const taskManager = new TaskManager()
            taskManager.addTask(task)

            //closeForm
            domManager.hideForm('#task-form')
        })
    })
    addEventListenerToProject()//Add event listener to project every time page is loaded
})


/**_____________________________________________________________________________________________________
 *Open Project to view project details 
 * 
 * When Project is clicked, the Dom is populated with project deatails
 * */    

   
    

    