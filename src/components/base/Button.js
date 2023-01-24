import PropTypes from 'prop-types';

const Button = ({
  onClick,
  text = 'Click me',
  buttonClass = 'button__primary',
  type = 'text',
}) => {
  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  buttonClass: PropTypes.string,
};

export default Button;
