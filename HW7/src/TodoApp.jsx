// src/components/TodoApp.js
import React, { useState, useEffect } from 'react';
import TodoList from './ToDoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Load todos from localStorage on component mount
    loadAllTodosFromStorage();
  }, []);

  const loadAllTodosFromStorage = () => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') {
      showAlert('danger', 'Lütfen bir todo girin...');
      return;
    }

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    addTodoToStorage(updatedTodos);

    showAlert('success', 'Todo başarıyla eklendi...');

    setNewTodo('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    addTodoToStorage(updatedTodos);

    showAlert('success', 'Todo başarıyla silindi...');
  };

  const filterTodos = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const clearAllTodos = () => {
    if (window.confirm('Tümünü silmek istediğinize emin misiniz?')) {
      setTodos([]);
      localStorage.removeItem('todos');
    }
  };

  const addTodoToStorage = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const showAlert = (type, message) => {
    // Implement your alert mechanism here
    console.log(`Alert: ${type} - ${message}`);
  };

  return (
    <div className="container" 
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#e3d8e0',

         }}>
      <div className="card row" 
      style={{
        width: '600px',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px #090c08',
        backgroundColor: 'white',
      }}>
        <div className="card-header" style={{fontSize:'20px', fontFamily:'sans-serif',display: 'flex',justifyContent: 'center', marginBottom:'20 px'}}>To do List</div>
        <div className="card-body">
          <form onSubmit={addTodo}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Bir Todo Girin"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-danger" style={{backgroundColor:'#B43757',fontSize:'16px', padding:'16px 20px',marginTop:'10px'}}>
              To do Ekleyin
            </button>
          </form>
          <hr />
        </div>
        <div className="card-body">
          <hr />
          <h5 className="card-title" id="todos-title" style={{fontSize:'20px', fontFamily:'sans-serif'}}>
            To doaa
          </h5>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                className="form-control"
                type="text"
                name="filter"
                id="filter"
                placeholder="Bir Todo Arayın"
                value={filter}
                onChange={filterTodos}
              />
            </div>
          </div>
          <hr />
          <TodoList todos={todos} filter={filter} deleteTodo={deleteTodo} />
          <hr />
          <button className="btn btn-dark" onClick={clearAllTodos} style={{ backgroundColor:'#C8A2C9',fontSize: '16px', padding:'16px 20px',marginTop:'10px' }}>
            Tüm Taskları Temizleyin
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
