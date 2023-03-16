# Encapsulate all data access, control,and manipulation methods in ProjectManager Class. These Chnages ensure that index.js operation don't know what hapens with data after beyond its scope 

    1. Privatise local storage access methods
        updateLocalStorage(): -Save project data to localstorage

        accessLocalStorage(): -Get projects data from local storage
    
    2. getProjects () : - Get project data from local storage 
        -Create Project Objects using project data 
        -Create Task Objects using Project.tasks data 
        -Push tasks to Project tasks
        -Push Project to #projects array

    3.  removeProject (project): - Remove Project from #projects and update localstorage with the resultant array
        -Return #projects array with -1 elements

    4.  #filterProjects(project) Helper method: Remove original copy of modified incoming project existing in project list to avoid duplication of data

    5.  updateProject(project):- Replace Original copy of project with incoming modified copy of the same project

    
      