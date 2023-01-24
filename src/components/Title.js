import PropTypes from 'prop-types';

const Title = ({ title = 'This is a Title', wrapperClass = 'title' }) => {
  return <div className={` ${wrapperClass}`}>{title}</div>;
};

Title.propTypes = {
  title: PropTypes.string,
  wrapperClass: PropTypes.string,
};

export default Title;
