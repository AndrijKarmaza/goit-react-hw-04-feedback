import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const { btnOne, btnTwo, btnThree } = options;
  return (
    <div className={css.btnContainer}>
      <button className={css.button} onClick={onLeaveFeedback}>
        {btnOne}
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        {btnTwo}
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        {btnThree}
      </button>
    </div>
  );
};

FeedbackOptions.protoType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.exact({
    btnOne: PropTypes.string.isRequired,
    btnTwo: PropTypes.string.isRequired,
    btnThree: PropTypes.string.isRequired,
  }),
};
