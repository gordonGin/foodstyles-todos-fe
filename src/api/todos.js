import axiosInstance from '../config/api';

const Todo = {
  getTodos: () => {
    // eslint-disable-next-line no-debugger
    return axiosInstance
      .get(`/api/todo`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw Error(error);
      });
  },
  addTodo: (description) => {
    return axiosInstance
      .post(
        'api/todo',
        {
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => response.data)
      .catch((error) => {
        throw Error(error);
      });
  },

  deleteTodo: (todoId) => {
    return axiosInstance
      .delete(`/api/todo/${todoId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw Error(error);
      });
  },

  updateTodo: (todoId, status) => {
    return axiosInstance
      .put(
        `/api/todo/${todoId}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => response.data)
      .catch((error) => {
        throw Error(error);
      });
  },
};

export default Todo;
