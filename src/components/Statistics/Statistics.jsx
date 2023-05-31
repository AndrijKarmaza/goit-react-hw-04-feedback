import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={css.title}>Statistics</h2>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <>
          <p className={css.value}>
            <span className={css.description}>Good: </span>
            {good}
          </p>
          <p className={css.value}>
            <span className={css.description}>Neutral: </span>
            {neutral}
          </p>
          <p className={css.value}>
            <span className={css.description}>Bad: </span>
            {bad}
          </p>
          <p className={css.value}>
            <span className={css.description}>Total: </span>
            {total}
          </p>
          <p className={css.value}>
            <span className={css.description}>Positive feedback: </span>
            {positivePercentage}%
          </p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
