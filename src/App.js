import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './redux/slices/todoSlice';
import { saveToLocalStorage, loadFromLocalStorage } from './utils/localStorage';
import { Home } from './screen/Home/Home';
import { Login } from './screen/Login/Login';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const savedTodos = loadFromLocalStorage('todos');
    savedTodos.forEach((todo) => dispatch(addTodo(todo)));
  }, [dispatch]);

  useEffect(() => {
    saveToLocalStorage('todos', todos);
  }, [todos]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
