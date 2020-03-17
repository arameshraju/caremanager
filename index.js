import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './home';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Care Manager'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
