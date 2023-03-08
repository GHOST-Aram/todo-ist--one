export default class DOMManager {

    constructor () {

    }

    createContainer () {
     const div = document.createElement('div')
     div.className = 'p-4 rounded-md'

     return div
    }
    createFooter () {
     const footer = document.createElement('footer')

     //Horizontal line
     const line = document.createElement('hr')
     line.style.height = '1xp'
     line.className = 'bg-slate-500 w-full'
     footer.appendChild(line)

     //Paragraph
     const p = document.createElement('p')
     p.className = 'text-sm text-slate-500 text-center py-4'
     p.innerHTML = `Copyright &copy; ${new Date().getFullYear()}`
     footer.appendChild(p)

     return footer
    }
   createHeader () {
     const header = document.createElement('header')
     header.className = 'p-4 bg-blue-700 m-auto mx-4 rounded-top rounded-md'
     return header
   }
   createHeading (text) {
     const heading = document.createElement('h1')
     heading.className = 'text-xl text-slate-200'
     heading.textContent = text

     return heading
   }
   createLogo (text) {
     const logo = this.createHeading(text)
     logo.classList.remove('text-xl')
     logo.classList.add('text-2xl','font-bold','text-center')

     return logo
   }
   createSidebar () {
     const sidebar = document.createElement('aside')
     sidebar.className = 'p-4 bg-blue-700 rounded-md'
     
     return sidebar
   }
   render (content) {
     const contentContainer = document.querySelector('#content')
     contentContainer.appendChild(content)
   }
   
}