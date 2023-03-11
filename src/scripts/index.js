import '../styles/styles.css'
import DOMManager from './dom_manager.js'
import Project from './project.js'
import ProjectManager from './project_manager'
import Task from './task'
import TaskManager from './task_manager'

const project = new Project()
const domManager = new DOMManager()
const projectManager = new ProjectManager()

function displayProjectCredentials(project){
    const projectHeader = domManager.createProjectHeader(project)
        container.appendChild(projectHeader)


        //Project description and new task btn
        const descNBtnContainer = domManager.createContainer()
        descNBtnContainer.className = 'flex flex-row justify-between items-center w-full'
        //DESCRIPTION
        const projectDescription = domManager.createProjectDescription(project.getDescription())
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
    const defaultProject = new Project()
        defaultProject.setDescription('Today\'s Activities')
        defaultProject.setName('Today')
        projectManager.addToProjectList(defaultProject)

        //Default Project Container
        const defaultProjectContainer = domManager.createProjectContainer(defaultProject.getName())
        sidebar.appendChild(defaultProjectContainer)

    //Display default project
        displayProjectCredentials(defaultProject)
        displayTasksContainer()
        
       


    
//Create new Project

addBtn.addEventListener('click', (e) =>{
    //project manager create new project
    domManager.displayForm('#project-form')
    //Add event listener to form
    document.querySelector('form#project-form').addEventListener('submit', (event) =>{
        event.preventDefault()
        //Get data
        const data = domManager.getFormData('#project-form')
        //Create new Project
        project.setName(data[0])
        project.setDescription(data[1])
        
        //Project container
        const newProjecContainer = domManager.createProjectContainer(project.getName())
            sidebar.appendChild(newProjecContainer)

        //Add to project lists
            projectManager.addToProjectList(project)
        //hide project form on submit
            domManager.hideForm()

            
    })
})
//______________________________________________________________________________________________________________________
// CREAT New tasks TASKS
/**
 * Display task details form
 * Get tasks details from the form
 * Create an instance on Task Object
 * Add task to project task list
 * close task form on submit
*/
//Display form
document.querySelector('#new-task-btn').addEventListener('click', () =>{
    domManager.displayForm('#task-form')
})
document.querySelector('form#task-form').addEventListener('submit', (e) =>{
    e.preventDefault()
    //get data
    const data = domManager.getFormData('#task-form')
    
    // Create new task
    const task = new Task(data[0])
    task.setDescription([data[1]])
    task.setDueDate(data[2])

    //Add  task to project task list
    project.addTask(task)
    
    //closeForm
    domManager.hideForm()   
    console.log(project.getTasks())
})
    
    
/**
 * Universally hide forms 
 */
document.querySelectorAll('button[type=button]').forEach(
    button =>{
        button.addEventListener('click', () =>{
            domManager.hideForm()
        })

    }
)

    
    


    