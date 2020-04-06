import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './home';
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
        <Home/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
