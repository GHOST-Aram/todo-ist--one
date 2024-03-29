import { formatDistanceToNow } from 'date-fns'

export default class DOMManager {

  constructor () {

  }
  closeForm(id){
    document.querySelector(id).classList.add('hidden')
    this.resetForm(id)
  }
  //Add Icon
  createAddButton () {

    //Button
    const button = document.createElement('button')
    button.className = 'bg-blue-600 rounded-full hover:bg-blue-700 transition-all'

    //Icon
    const icon = document.createElement('i')
    icon.className = 'text-xl text-slate-200 fa-solid fa-plus font-medium'

    button.appendChild(icon)

    return button
  }
  //Div Container
  createContainer () {
    const div = document.createElement('div')
    div.className = 'p-4'

    return div
  }
  //Footer
  createFooter () {
    const footer = document.createElement('footer')
      footer.className = 'border-t-2 border-solid border-white bg-blue-700'

  //Paragraph
  const p = document.createElement('p')
    p.className = 'text-sm text-slate-500 text-center py-4'
    p.innerHTML = `Copyright &copy; ${new Date().getFullYear()}`
    footer.appendChild(p)

    return footer
  }
  //Page header
  createHeader () {
    const header = document.createElement('header')
    header.className = 'p-4 bg-blue-700 m-auto mx-4 rounded-top rounded-md'
    return header
  }
  //Heading element
  createHeading (text) {
    const heading = document.createElement('h1')
    heading.className = 'text-xl text-slate-200'
    heading.textContent = text

    return heading
  }
  //Horizontal line
  createHorizontalLine () {
    const line = document.createElement('hr')
    line.style.height = '1xp'
    line.className = 'bg-slate-500 w-full'

    return line
  }
  //Business name
  createLogo (text) {
    const logo = this.createHeading(text)
    logo.classList.remove('text-xl')
    logo.classList.add('text-2xl','font-bold','text-center')

    return logo
  }
  //Project container
  //used for dislay in the side bar
  createProjectContainer (projectName) {
    const hashLink = document.createElement('a')
    hashLink.href = `#${projectName.replaceAll(' ','-')}`
    const projCont = document.createElement('div')
      projCont.id = `${projectName.toLowerCase().replaceAll(' ', '-')}-container`
      projCont.className = 'w-full bg-blue-600 border-t-2 border-solid border-white hover:bg-blue-700 transition-all'

      //Name
      const projName = this.createHeading(projectName)
        projName.id = `${projectName.toLowerCase().replaceAll(' ', '-')}`
        projName.className = 'project py-2 text-slate-200 text-xl px-4'
      
      //Append name
      hashLink.appendChild(projName)
      projCont.appendChild(hashLink)

      //Append btns
      const managebtns = this.createProjectManageBtns()
      if(projectName !== 'Today'){projCont.appendChild(managebtns)}
      

      return projCont
  }
  //Description container
  createProjectDescription (description) {
    const container = this.createContainer()
    container.classList.add('bg-blue-600','px-8', 'py-4')

    //Paragraph
    const par = document.createElement('p')
    par.className = 'text-slate-200 text-md'
    par.textContent = description

    container.appendChild(par)

    return container
  }
  //Project header
  //display in the main body 
  //Peiod is an object with period.start and period.end
  createProjectHeader (projectName){
    //Main container
    const container = this.createContainer()
    container.className = 'flex flex-row justify-between bg-blue-600 items-center w-full py-4 pl-8'
    //Add Name
    const projectTitle = this.createHeading(projectName)
    projectTitle.classList.add('font-bold')
    projectTitle.id = 'project-name'
    container.appendChild(projectTitle)

    return container
  }
  //Create project management btns
  createProjectManageBtns () {
    //Create conatiner
    const btnsDiv = this.createContainer()
    btnsDiv.classList.add('hidden', 'manage-project','flex', 'flex-col','gap-2' ,'items-center', 'justify-between')

    //Edit btn
    const editBtn =  document.createElement('button')
    editBtn.className = 'project-edit-btn bg-yellow-500 rounded-md py-2 px-8'
    //Check icon
    const editIcon = document.createElement('i')
    editIcon.className = 'text-bold text-slate-200 text-lg fa-solid fa-pen'

    //Append btns
    editBtn.appendChild(editIcon)
    btnsDiv.appendChild(editBtn)

    //delete btn
    const deleteBtn =  document.createElement('button')
    deleteBtn.className = 'project-delete-btn bg-red-500 rounded-md py-2 px-8'
    //Check icon
    const deleteIcon = document.createElement('i')
    deleteIcon.className = 'text-bold text-slate-200 text-lg fa-solid fa-trash'

    deleteBtn.appendChild(deleteIcon)
    btnsDiv.appendChild(deleteBtn)

    return btnsDiv
  }
  //Side bar
  createSidebar () {
     const sidebar = document.createElement('aside')
     sidebar.className = 'px-4 bg-blue-700 rounded-md py-16'

     return sidebar
  }
  //Child node of tasksContainer
  //Node contains information of one task only
  createTaskDiv (task) {
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('bg-slate-200', 'rounded-md', 'task', 'pb-2', 'overflow-hidden')
    taskDiv.id = `${task.id}-container`
    //title
    const taskName = document.createElement('p')
    taskName.textContent = `${task.title}`
    taskName.className = 'font-bold bg-blue-700 py-2 px-4 text-slate-200 rounded-t-md'
    taskDiv.appendChild(taskName)
    
    //Dscription
    const description = document.createElement('p')
    description.textContent = `${task.getDescription()}`
    description.className = 'px-4'
    taskDiv.appendChild(description)
    
    //Duedate
    const dueDate = document.createElement('p')
    const date = task.getDueDate().replaceAll('-',', ')
    try {
      dueDate.innerHTML = `<strong>Due in :</strong> ${formatDistanceToNow(new Date(date))}`
    } catch (error) {
      console.error(`Error occured while Formating date for ${task}`)
    }
    dueDate.className = 'px-4'
    taskDiv.appendChild(dueDate)


    return taskDiv
  }
  createTaskManagementBtns (task) {
        //Task managment buttons
        const btnsDiv = document.createElement('div')
        btnsDiv.className = 'flex flex-row justify-between px-4 w-full items-center mt-4'
        //Mark as complete
        const markAsCompleteBtn =  document.createElement('button')
            markAsCompleteBtn.id = `${task.id}-complete`
            markAsCompleteBtn.className = 'task-complete-btn rounded-md py-2 px-8'
            //Check icon
            const checkIcon = document.createElement('i')
              checkIcon.className = 'text-bold text-slate-200 text-lg fa-solid fa-check'

            markAsCompleteBtn.appendChild(checkIcon)

            //cHECK IF TASK COMPLETE
            if(task.isComplete()){
              markAsCompleteBtn.classList.add('bg-green-500')
            } else {
              markAsCompleteBtn.classList.add('bg-slate-500')
            }
        btnsDiv.appendChild(markAsCompleteBtn)
    
        //Edit btn
        const editBtn =  document.createElement('button')
            editBtn.id = `${task.id}-edit`
            editBtn.className = 'task-edit-btn bg-yellow-500 rounded-md py-2 px-8'
            //Check icon
            const editIcon = document.createElement('i')
            editIcon.className = 'text-bold text-slate-200 text-lg fa-solid fa-pen'
        
            editBtn.appendChild(editIcon)
        btnsDiv.appendChild(editBtn)
    
        //delete btn
        const deleteBtn =  document.createElement('button')
            deleteBtn.id = `${task.id}-delete`
            deleteBtn.className = 'task-delete-btn bg-red-500 rounded-md py-2 px-8'
            //Check icon
            const deleteIcon = document.createElement('i')
            deleteIcon.className = 'text-bold text-slate-200 text-lg fa-solid fa-trash'
        
            deleteBtn.appendChild(deleteIcon)
        btnsDiv.appendChild(deleteBtn)

        return btnsDiv
  }
  //Parent cintainer to all taskContainer nodes 
  createTasksContainer () {
    //Tasks container
    const tasksContainer = this.createContainer()
    tasksContainer.classList.add('w-full', 'bg-blue-600', 'grid', 'grid-2', 'gap-4')
    tasksContainer.id = 'tasks-container'
  
    return tasksContainer
    }
  //User profile
  createUserProfile (userName) {
    //Profile container
    const profile = this.createContainer()
    profile.classList.add('flex', 'flex-row', 'justify-end', 'items-center', 'gap-4')
    profile.id = 'profile'

    //picture image
    const pic = document.createElement('img')
    pic.id = 'profile-picture'
    pic.className = 'rounded-full'
    profile.appendChild(pic)

    //user name
    const name = this.createHeading(userName)
    profile.prepend(name)

    return profile
  }
  displayForm (hashFormId) {
    document.querySelector(hashFormId).classList.toggle('hidden')
  }
  getFormData (hashFormId) {
    const data = []
    //Get node list
    document.querySelectorAll(`${hashFormId} input`).forEach(element =>{
      //get input values and add to data array
      data.push(element.value.trim())
    })
    return data
  } 
  
  //Append to DOM
  render (content) {
      const contentContainer = document.querySelector('#content')
      contentContainer.appendChild(content)
    }
  resetForm(id){
    document.querySelectorAll(`${id} input`).forEach(
      inputElement => inputElement.value = ''
    )
  }
    
}