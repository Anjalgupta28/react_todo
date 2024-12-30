import React, { useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import TodoList from '../../components/TodoList/TodoList';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../redux/slices/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import './Home.css'; // Import the CSS file
import { HOME_TITLE, ADD_TODO_BTN_TEXT, LOGOUT_BTN_TEXT, EDIT_TODO_TITLE, ADD_TODO_TITLE, TITLE_REQUIRED_ALERT, WELCOME_MESSAGE } from '../../utils/Strings'; // Import strings

export const Home = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [currentTodo, setCurrentTodo] = React.useState(null);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [dueDate, setDueDate] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Check if user is logged in, otherwise redirect to login
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
    }
  }, [navigate]);

  const handleOpenModal = (todo = null) => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setDueDate(todo.dueDate);
      setCurrentTodo(todo);
      setIsEdit(true);
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
      setCurrentTodo(null);
      setIsEdit(false);
    }
    setIsModalVisible(true);
  };

  const handleSubmit = () => {
    if (title.trim()) {
      if (isEdit && currentTodo) {
        const updatedTodo = { ...currentTodo, title, description, dueDate };
        dispatch(updateTodo(updatedTodo));
      } else {
        const newTodo = {
          id: uuidv4(),
          title,
          description,
          dueDate,
          isCompleted: false,
        };
        dispatch(addTodo(newTodo));
      }
      setIsModalVisible(false);
    } else {
      alert(TITLE_REQUIRED_ALERT);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from localStorage
    navigate('/'); // Redirect to login screen
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>{WELCOME_MESSAGE}</h2>
        <Button onClick={handleLogout} className="logout-btn">
          {LOGOUT_BTN_TEXT}
        </Button>
      </div>
      <Button onClick={() => handleOpenModal()} className="add-todo-btn">
        {ADD_TODO_BTN_TEXT}
      </Button>
      <TodoList onEdit={handleOpenModal} />
      <Modal
        isVisible={isModalVisible}
        title={isEdit ? EDIT_TODO_TITLE : ADD_TODO_TITLE}
        onClose={() => setIsModalVisible(false)}
      >
        <Input value={title} onChange={setTitle} placeholder="Enter Title"/>
        <Input value={description} onChange={setDescription} placeholder="Enter Description" />
        <Input type="date" value={dueDate} onChange={setDueDate} />
        <Button onClick={handleSubmit}>{isEdit ? 'Update' : 'Submit'}</Button>
      </Modal>
    </div>
  );
};
