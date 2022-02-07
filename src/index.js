document.addEventListener("DOMContentLoaded", () => {

// // As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.

// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

//Need to us the preventDefault() with the submit function


function renameFormId() {
  let newName =  document.getElementById('new-task-description');
  return newName.id = "new_task_description"
}
renameFormId()

  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset();
  });

  function buildToDo(toDo) {
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDelete)
    btn.textContent = "X"
    p.textContent = `${toDo}  `;
    p.appendChild(btn);
    console.log(p)
    document.querySelector('#list').appendChild(p)
  }

  function handleDelete(e) {
    e.target.parentNode.remove();
  }

});
