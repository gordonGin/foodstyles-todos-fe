import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { todoOperations, todoSelectors } from '../store/duck/todo';
import { userSelectors } from '../store/duck/user';

import CheckSign from '../assets/icons/Check';
import Title from './Title';
import TodoList from './TodoList';
import Status from './Status';
import { setIsAuthenticated } from '../store/duck/user/reducer';
import Loader from './base/Loader';

const Todos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.getTodos);
  const isLoading = useSelector(todoSelectors.getIsLoading);
  const isAuthenticated = useSelector(userSelectors.getIsUserAuthenticated);
  const [todoInput, setTodoInput] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signup');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(todoOperations.getTodos());
  }, []);

  const _handleKeyPressEvent = (keyCode) => {
    if (keyCode !== 13) {
      return;
    }

    dispatch(todoOperations.addTodo(todoInput));
    setTodoInput('');
  };

  const _logout = () => {
    localStorage.clear();
    dispatch(setIsAuthenticated(false));
    navigate('/signup');
  };

  const _deleteTodo = (todoId) => {
    if (!todoId) {
      return;
    }
    dispatch(todoOperations.deleteTodo(todoId));
  };

  const _checkTodo = (todoId, status = '') => {
    if (!todoId || !status) {
      return;
    }

    const todoUpdateState =
      status.toUpperCase() === 'INCOMPLETED' ? 'COMPLETED' : 'INCOMPLETED';

    dispatch(todoOperations.checkTodo(todoId, todoUpdateState));
  };

  const filterTodos = (todos = [], selectedStatus = '') => {
    if (selectedStatus.toLowerCase() !== 'all') {
      return todos.filter(
        ({ status = '' }) => status.toLowerCase() === selectedStatus
      );
    }

    return todos;
  };

  return (
    <div className={'feature__container'}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div onClick={() => _logout()}>logout</div>
          <div className={'todos__container'}>
            <CheckSign />
            <Title title={'Todos'} />
            <input
              className={'form__input'}
              type='text'
              placeholder='Add a new todo'
              value={todoInput}
              onKeyDown={({ keyCode }) => _handleKeyPressEvent(keyCode)}
              onChange={({ target }) => setTodoInput(target.value)}
            />

            <TodoList
              todos={filterTodos(todos, selectedStatus)}
              deleteTodo={_deleteTodo}
              checkTodo={_checkTodo}
            />
            {todos.length > 0 && (
              <Status
                statusList={['All', 'Completed', 'Incompleted']}
                onClick={setSelectedStatus}
                selected={selectedStatus}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Todos;
