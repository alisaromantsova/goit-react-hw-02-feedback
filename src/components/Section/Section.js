import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/FeedbackOptions/Notification/Notification';

export const Section = ({
  title,
  good,
  neutral,
  bad,
  total,
  onButton,
  positivePercentage,
  options,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <FeedbackOptions onButton={onButton} options={options} />
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
