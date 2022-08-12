// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event listeners
todoButton.addEventListener('click', addTodo);

// Functions
function addTodo(event) {
   // Prevent form from submitting
   event.preventDefault();
   // Create Todo div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   // Create li
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   // Append newTodo(li) to todoDiv(div)
   todoDiv.appendChild(newTodo);
   // Create Check mark button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add('complete-btn');
   todoDiv.appendChild(completedButton);
   // Create Delete mark button
   const deleteButton = document.createElement('button');
   deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
   deleteButton.classList.add('delete-btn');
   todoDiv.appendChild(deleteButton);
   // Append to todoList
   todoList.appendChild(todoDiv);
   // Clear todoInput value
   todoInput.value = '';
}
