import React from 'react';
import Button from '../Button/Button';

const TodoItem = ({ todo, onDelete, onUpdate, onEdit }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>{todo.dueDate}</p>
      <p>Status: {todo.isCompleted ? 'Completed' : 'Pending'}</p>
      <Button onClick={() => onUpdate({ ...todo, isCompleted: !todo.isCompleted })}>
        {todo.isCompleted ? 'Mark as Pending' : 'Mark as Completed'}
      </Button>
      <Button onClick={() => onEdit(todo)}>Edit</Button>
      <Button onClick={() => onDelete(todo.id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;
