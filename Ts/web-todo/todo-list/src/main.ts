interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

todoForm.addEventListener('submit', (event) => {

  const newTodoText = todoInput.value.trim(); 

  if (newTodoText.length > 0) {
    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    todos.push(newTodo);
    renderTodos();

    todoInput.value = '';
  }
});

function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    if (todo.completed) {
      li.classList.add('completed');
    }

    const span = document.createElement('span');
    span.textContent = todo.text;
    span.addEventListener('click', () => {
      const item = todos.find(t => t.id === todo.id);
      if (item) {
        item.completed = !item.completed;
      }
      renderTodos(); 
    });


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
      const itemIndex = todos.findIndex(t => t.id === todo.id);
      if (itemIndex > -1) {
        todos.splice(itemIndex, 1);
      }
      renderTodos(); 
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}