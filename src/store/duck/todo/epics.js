import Todo from '../../../api/todos';
import { setTodosFailure, setTodosSuccess, setLoader } from './reducer';
import { setIsAuthenticated } from '../user/reducer';

const getTodos = () => {
  return async (dispatch) => {
    dispatch(setLoader(true));
    try {
      const { data: todos } = await Todo.getTodos();
      dispatch(setIsAuthenticated(true));
      dispatch(setTodosSuccess(todos));
    } catch (e) {
      dispatch(setIsAuthenticated(false));
    }
  };
};

const addTodo = (description) => {
  return async (dispatch) => {
    dispatch(setLoader(true));

    try {
      const { data: todo } = await Todo.addTodo(description);

      if (Object.keys(todo).length > 0) {
        const { data: todos } = await Todo.getTodos();

        dispatch(setTodosSuccess(todos));
      }
    } catch (e) {
      dispatch(setTodosFailure(e));
    } finally {
      dispatch(setLoader(false));
    }
  };
};

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    dispatch(setLoader(true));

    try {
      const { data: todo } = await Todo.deleteTodo(todoId);

      if (Object.keys(todo).length > 0) {
        const { data: todos } = await Todo.getTodos();

        dispatch(setTodosSuccess(todos));
      }
    } catch (e) {
      dispatch(setTodosFailure(e));
    } finally {
      dispatch(setLoader(false));
    }
  };
};

const checkTodo = (todoId, status = '') => {
  return async (dispatch) => {
    try {
      const { data: todo } = await Todo.updateTodo(todoId, status);

      if (Object.keys(todo).length > 0) {
        const { data: todos } = await Todo.getTodos();

        dispatch(setTodosSuccess(todos));
      }
    } catch (e) {
      dispatch(setTodosFailure(e));
    } finally {
      dispatch(setLoader(false));
    }
  };
};
export default { getTodos, addTodo, deleteTodo, checkTodo };
