import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onButton }) => {
  let i = 1;
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      {options.map(item => {
        i += 1;
        return (
          <button key={i} data-name={item} onClick={onButton}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onButton: PropTypes.func.isRequired,
};
