import PropTypes from 'prop-types';
import Crossmark from '../assets/icons/Crossmark';

const Todo = ({ todo = {}, deleteTodo, checkTodo }) => {
  const { description, id, status = '' } = todo;
  return (
    <div className={'todo__container'}>
      <input
        className={'todo__checkbox'}
        type={'checkbox'}
        onClick={() => {
          checkTodo(id, status);
        }}
        checked={status.toLowerCase() === 'completed'}
      />
      <div
        className={`todo__description ${
          status.toLowerCase() === 'completed' ? 'checked' : ''
        }`}
      >
        {description}
      </div>
      <div className={'todo__checkmark'}>
        <Crossmark onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
  }),
  deleteTodo: PropTypes.func,
  checkTodo: PropTypes.func,
};

export default Todo;
