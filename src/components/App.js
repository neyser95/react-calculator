import React, { Component } from 'react';
import userInput from './UserInput/UserInput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  constructor() {
    super(),
      (this.state = {
        userInput: '',
        buttons: [
          {
            value: 'AC',
            btnClass: 'grey-btn',
            btnNumber: 27
          },
          {
            value: '±',
            btnClass: 'grey-btn',
            btnNumber: 16
          },
          {
            value: '%',
            btnClass: 'grey-btn',
            btnNumber: 53
          },
          {
            value: '÷',
            btnClass: 'orange-btn',
            btnNumber: 191
          },
          {
            value: 7,
            btnClass: 'light-grey-btn',
            btnNumber: 55
          },
          {
            value: 8,
            btnClass: 'light-grey-btn',
            btnNumber: 56
          },
          {
            value: 9,
            btnClass: 'light-grey-btn',
            btnNumber: 57
          },
          {
            value: 'x',
            btnClass: 'orange-btn',
            btnNumber: 56
          },
          {
            value: 4,
            btnClass: 'light-grey-btn',
            btnNumber: 55
          },
          {
            value: 5,
            btnClass: 'light-grey-btn',
            btnNumber: 56
          },
          {
            value: 6,
            btnClass: 'light-grey-btn',
            btnNumber: 57
          },
          {
            value: '-',
            btnClass: 'orange-btn',
            btnNumber: 56
          },
          {
            value: 1,
            btnClass: 'light-grey-btn',
            btnNumber: 55
          },
          {
            value: 2,
            btnClass: 'light-grey-btn',
            btnNumber: 56
          },
          {
            value: 3,
            btnClass: 'light-grey-btn',
            btnNumber: 57
          },
          {
            value: '+',
            btnClass: 'orange-btn',
            btnNumber: 56
          },
          {
            value: 0,
            btnClass: 'zero-grey-btn',
            btnNumber: 55
          },
          {
            value: '.',
            btnClass: 'light-grey-btn',
            btnNumber: 56
          },
          {
            value: '=',
            btnClass: 'orange-btn',
            btnNumber: 56
          }
        ]
      });
  }

  handleUserInput(e) {
    const userInput = e.target.value;
    
    this.setState({userInput});
  }

  render() {
    return (
      <div id='cal-layout'>
        <h1 id='main-title'> React Calculator</h1>
        <div id='calculator'>
          <UserInput
            handleInput={this.handleUserInput.bind(this)}
            userInput={this.state.userInput}
          />
        </div>
      </div>
    );
  }
}

export default App;
