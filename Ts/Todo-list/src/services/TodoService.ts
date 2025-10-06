// src/services/TodoService.ts

import { Todo } from '../models/Todo';

export class TodoService {
  private todos: Todo[] = [];
  private nextId: number = 1;


  public getTodos(): Todo[] {
    return this.todos;
  }

  public addTodo(task: string): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      task: task,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }


  public toggleTodoCompleted(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  public deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}