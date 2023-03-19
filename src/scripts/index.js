import '../styles/styles.css'
import DOMManager from './dom_manager.js'
import Project from './project.js'
import ProjectManager from './project_manager.js'
import Task from './task.js'

// localStorage.clear()
const domManager = new DOMManager()
const projectManager = new ProjectManager()
let projects = projectManager.getProjects()//Get projects



window.location.hash =''
//Create Project list container
const projectList = document.createElement('div')
projectList.className = 'flex flex-col gap-2'

function activateDeleteBtn(task){
    const btn = document.querySelector(`#${task.id}-delete`)
    let currentProject = getCurrentProject()
    btn.addEventListener('click', () => {
         //Display new task
         currentProject = projectManager.removeTask(currentProject, task)
         displayTasks(currentProject.getTasks())
    })
}
function activateFormCloseBtns() {
    document.querySelectorAll('.hide-form').forEach(btn =>{
        btn.addEventListener('click', (e) =>{
          document.querySelectorAll('form').forEach(form =>
              form.classList.add('hidden'))
      })
    }) 
  }
//MARK TASK AS COMPLETE
function activateMarkAsCompleteBtn(task){
    const btn = document.querySelector(`#${task.id}-complete`)
    btn.addEventListener('click', 
    (e) => {
        //Mrk complete
        projectManager.markTaskAsComplete(getCurrentProject(), task)
        //Remove old bg-color
        btn.classList.remove('bg-slate-500')
        //Add new bg-color
        btn.classList.add('bg-green-500')
    })
} 

function activateEditBtns(task) {
    //Get button
    const btn = document.querySelector(`#${task.id}-edit`)
    //Add event listener
    btn.addEventListener('click', (e) =>{

        //Populate form with data
        document.querySelector('#task-title-edit').value = task.title //Title
        
        // /Description
        document.querySelector('#task-description-edit').value = task.getDescription()
        
        //Due date
        document.querySelector('#duedate-edit').value = task.getDueDate() 
        
        //Display Form
        domManager.displayForm('#edit-task-form')
        //Submit and change task
        
        editTask(task)
        //Set id back to task form
    })

}

//CTREATE NEW TASK
function createNewTask (input) {
    // Create new task
    const task = new Task(input[0])
    task.setDescription(input[1])
    task.setDueDate(input[2])
    return task    
}
function displayCurrentProject () {
    const currentProject = getCurrentProject()
    document.querySelector('#content-container #project-name').textContent = currentProject.name
    document.querySelector('#project-description p').textContent = currentProject.getDescription()
    displayTasks(currentProject.getTasks())
}
//dISPLAY ON SIDEBAR
function displayNewProject(project){
    
    //Create project contsiner
    const container = domManager.createProjectContainer(project.name)
    // Append to list
    projectList.appendChild(container)
    
}

//Display new Task
function displayNewTask(task){
    const taskDiv = domManager.createTaskDiv(task)
    
    //Btns
    const btns = domManager.createTaskManagementBtns(task)

    //Append buttons to task div
    taskDiv.appendChild(btns)

    // append taskdiv to task container
    tasksContainer.appendChild(taskDiv)

    //Activate Mark as complete buttons
    activateMarkAsCompleteBtn(task)

    //Activate edit button
    activateEditBtns(task)

    //Activate delete btns
    activateDeleteBtn(task)
    return taskDiv
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


//Get currenttly displaying project from localstorage
//Dispaly project tasks tasks
function displayTasks(tasks) {
    tasksContainer.innerHTML = ''
    if(tasks && tasks.length > 0){
        tasks.forEach(task =>{
            displayNewTask(task)
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

//Edit task on submit 
function editTask (oldTask) {
    let currentProject = getCurrentProject()
    const form = document.querySelector('#edit-task-form')
    //Add submit event to task-edit form
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        //Get data
        const data = domManager.getFormData('#edit-task-form')
        //Create task
        const newTask = createNewTask(data)

        //remove old task from DOM
        const editedTaskDiv = document.querySelector(`#${oldTask.id}-container`)
        tasksContainer.removeChild(editedTaskDiv)

        //remove old task from list
        currentProject = projectManager.removeTask(currentProject, oldTask)

        //resasign current project
        currentProject = projectManager.addTask(currentProject, newTask)

        
        //Display new task
        displayTasks(currentProject.getTasks())

        //close form
        domManager.closeForm('#edit-task-form')
        //Restore id
        window.location.reload()
    })

}
//Searchfor current displaying project projects
function getCurrentProject(){
    
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

//Content container
const container = domManager.createContainer()
container.classList.add('bg-blue-700', 'flex','flex-col', 'items-start', 'justify-start', 'gap-2')
container.id = 'content-container'
domManager.render(container)


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
    //Display Project List
    renderProjects(projects)

    //Dispatch click event on form close btns
    activateFormCloseBtns()
    
    //DISPLAY PROJECT CREATION FORM
    addBtn.addEventListener('click', (e) =>{
        domManager.displayForm('#project-form')
    })
    
    //SUBMIT NEW PROJECT
    document.querySelector('form#project-form').addEventListener('submit', (event) =>{
        event.preventDefault()
        const data = domManager.getFormData('#project-form')//Get data
        const project = new Project(data[0])//Create new Project
        project.setDescription(data[1])
        projectManager.addToProjectList(project)//Add to project list
        displayNewProject(project)
        projects = projectManager.getProjects()
        //Rerender all projects
        
        })

    //NewTask
    document.querySelector('#new-task-btn').addEventListener('click', () =>{
        //Display Form
        domManager.displayForm('#task-form')
    })
   
   
    //CREATE TASK and submit new task
    document.querySelector('#task-form').addEventListener('submit', (e) =>{
        e.preventDefault()
        //Get input
        //get data
        const input = domManager.getFormData('#task-form')
        //Create task and retunr value
        const task = createNewTask(input)
        //Get current project and add task to project tasklist
        let  currentProject = getCurrentProject()
        //Add task to current project tasks
        currentProject = projectManager.addTask(currentProject, task)
        //Display new task task

        if(currentProject.getTasks().length < 2){
            tasksContainer.innerHTML = ''
            displayNewTask(task)
        } else {
            displayNewTask(task)
        }
        //Close form after adding new task
        document.querySelector('#task-form').classList.add('hidden')
        })
    //Display Current project
    window.addEventListener('hashchange', () =>{
        displayCurrentProject()
    })
    window.dispatchEvent(new Event('hashchange'))

})

/**_____________________________________________________________________________________________________
 *Open Project to view project details 
 * 
 * When Project is clicked, the Dom is populated with project deatails
 * */    

    

    