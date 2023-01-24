import PropTypes from 'prop-types';

const Status = ({ statusList = [], onClick, selected = '' }) => {

  const renderOptions = () => {
    return statusList.map((status) => {
      return (
        <div
          key={status}
          onClick={() => onClick(status.toLowerCase())}
          className={`status__options ${
            status.toLowerCase() !== selected.toLowerCase() ? 'unselected' : ''
          }`}
        >
          {status}
        </div>
      );
    });
  };


  return (
    <div className={'status__container'}>
      <div className={'status__label'}>Show:</div>
      {renderOptions(statusList)}
    </div>
  );
};

Status.propTypes = {
  statusList: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  selected: PropTypes.string,
};

export default Status;
