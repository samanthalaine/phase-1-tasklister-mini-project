document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", event => {
    event.preventDefault()
    createToDoItem(event.target.new_task_description.value)
    form.reset()
  })
});

function createToDoItem(item){
  let toDo = document.createElement('li')
  let taskBox = document.querySelector("#tasks")
  let bttn = document.createElement('button')
  bttn.addEventListener('click', handleDelete)
  bttn.textContent = 'x'
  toDo.textContent = `${item} `
  toDo.appendChild(bttn)
  taskBox.append(toDo)
}

function handleDelete(event){
  event.target.parentNode.remove()
}