const getTodos = ({ todo } = {}) => {
  return todo.todos;
};

const getIsLoading = ({ todo } = {}) => {
  return todo.isLoading;
};

export default {
  getTodos,
  getIsLoading,
};
