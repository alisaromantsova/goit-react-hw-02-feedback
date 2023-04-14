import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  total = 0;
  positive = 0;
  onButtonClick = e => {
    const name = e.target.dataset.name;
    this.setState({
      [name]: this.state[name] + 1,
    });
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
    console.log(this.state);
    return (
      <Section
        title="Please leave feedback"
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        onButton={this.onButtonClick}
        options={['good', 'neutral', 'bad']}
      />
    );
  }
}
