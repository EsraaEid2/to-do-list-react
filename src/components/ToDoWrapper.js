import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { EditToDoForm } from './EditToDoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState(() => {
        // Load from local storage on initial render
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // Save to local storage whenever 'todos' changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, task, isEditing: false } : todo
        ));
    };

    return (
        <div className="ToDoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditToDoForm key={todo.id} editTodo={editTask} task={todo} />
                ) : (
                    <Todo 
                        key={todo.id} 
                        task={todo} 
                        toggleComplete={toggleComplete} 
                        deleteTodo={deleteTodo} 
                        editTodo={editTodo} 
                    />
                )
            ))}
        </div>
    );
};
