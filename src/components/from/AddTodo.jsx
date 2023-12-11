import React from 'react';
import { useState } from 'react';

const AddTodo = ({ todos, addTodo }) => {
  const [todo, setTodo] = useState('');

  let newTodo = {
    id: todos.length + 1,
    text: todo,
    completed: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setTodo('');
  };

  return (
    <div className="add-todo__container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="add-todo__input"
          placeholder="Add a new todo ..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="add-todo__button" type="submith">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
