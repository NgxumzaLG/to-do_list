// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteChecked);
filterOption.addEventListener('click', filterTodo);

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

function deleteChecked(event) {
   const item = event.target;

   // Delete Todo
   if (item.classList[0] === 'delete-btn') {
      const itemParentEl = item.parentElement;
      //Animation
      itemParentEl.classList.add('fall');
      itemParentEl.addEventListener('transitionend', () => itemParentEl.remove());
   }

   // Check mark Todo
   if (item.classList[0] === 'complete-btn') {
      const itemParentEl = item.parentElement;
      itemParentEl.classList.toggle('completed');
   }
}

function filterTodo(event) {
   const todos = todoList.childNodes;
   todos.forEach((todo) => {
      switch (event.target.value) {
         case 'all':
            todo.style.display = 'flex';
            break;

         case 'completed':
            if (todo.classList.contains('completed')) {
               todo.style.display = 'flex';
            } else {
               todo.style.display = 'none';
            }
            break;

         case 'incomplete':
            if (!todo.classList.contains('completed')) {
               todo.style.display = 'flex';
            } else {
               todo.style.display = 'none';
            }
            break;
      }
   });
}
