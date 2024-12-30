import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import { removeTodo, updateTodo } from '../../redux/slices/todoSlice';

const TodoList = ({ onEdit }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdate = (updatedTodo) => {
    dispatch(updateTodo(updatedTodo));
  };

  if (todos.length === 0) {
    return <p>No todos available. Add one!</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
