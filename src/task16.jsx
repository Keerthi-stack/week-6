import React, { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello',
    };
  }

  
  toggleMessage = () => {
    this.setState((prevState) => ({
      message: prevState.message === 'Hello' ? 'Goodbye' : 'Hello',
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
       
        <button onClick={this.toggleMessage}>Toggle Message</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Greeting />
      </div>
    );
  }
}

export default App;
