import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // total = 0;
  positive = 0;
  onButtonClick = e => {
    const name = e.target.dataset.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    // console.log(this.state);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const positive = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(2);

    if (isNaN(positive)) {
      return '0.00';
    }
    return positive;
  }
  render() {
    const options = Object.keys(this.state);
    // console.log(this.state.good);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onButton={this.onButtonClick} options={options} />
        </Section>
        <Section title="Statistics" total={this.total}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
