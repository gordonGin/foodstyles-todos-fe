import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos = [], deleteTodo, checkTodo }) => {
  const renderTodos = (todos = []) => {
    return todos.map((todo) => {
      return (
        <div key={todo.id} className={'todo__wrapper'}>
          <Todo todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
        </div>
      );
    });
  };

  return <div>{renderTodos(todos)}</div>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      status: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  deleteTodo: PropTypes.func,
  checkTodo: PropTypes.func,
};
export default TodoList;
