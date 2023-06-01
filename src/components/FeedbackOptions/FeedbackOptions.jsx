import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  console.log(options);
  return (
    <div className={css.btnContainer}>
      {options.map(element => (
        <button className={css.button} onClick={onLeaveFeedback}>
          {[element]}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.protoType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
