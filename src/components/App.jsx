import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const total = good + neutral + bad;

  const positiveFeedbackPercentage = ((good / total) * 100).toFixed(1);

  const handleFeedback = evt => {
    const text = evt.currentTarget.textContent;
    switch (text) {
      case 'good':
        return setGood(good + 1);

      case 'neutral':
        return setNeutral(neutral + 1);

      case 'bad':
        return setBad(bad + 1);

      default:
        return;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positiveFeedbackPercentage}
      />
    </Section>
  );
};
