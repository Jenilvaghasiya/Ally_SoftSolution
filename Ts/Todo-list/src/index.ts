// src/index.ts

import { TodoService } from './services/TodoService';
import promptSync from 'prompt-sync';

const prompt = promptSync();
const todoService = new TodoService();

function displayMenu(): void {
  console.log("\n--- To-Do List Menu ---");
  console.log("1. Add a new task");
  console.log("2. List all tasks");
  console.log("3. Mark a task as complete");
  console.log("4. Delete a task");
  console.log("5. Exit");
}

function listTasks(): void {
  console.log("\n--- Your Tasks ---");
  const todos = todoService.getTodos();
  if (todos.length === 0) {
    console.log("No tasks yet!");
    return;
  }
  todos.forEach(todo => {
    const status = todo.completed ? '[x]' : '[ ]';
    console.log(`${todo.id}. ${status} ${todo.task}`);
  });
}

function main() {
  let running = true;

  while (running) {
    displayMenu();
    const choice = prompt("Enter your choice: ");

    switch (choice) {
      case '1':
        const task = prompt("Enter the task description: ");
        if (task) {
          todoService.addTodo(task);
          console.log("Task added!");
        }
        break;
      case '2':
        listTasks();
        break;
      case '3':
        const toggleId = parseInt(prompt("Enter the task ID to toggle: "), 10);
        todoService.toggleTodoCompleted(toggleId);
        console.log("Task status updated!");
        break;
      case '4':
        const deleteId = parseInt(prompt("Enter the task ID to delete: "), 10);
        todoService.deleteTodo(deleteId);
        console.log("Task deleted!");
        break;
      case '5':
        running = false;
        console.log("Goodbye! 👋");
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

// Start the application
main();