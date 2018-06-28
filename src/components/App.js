import React, { Component } from 'react';
import '../css/style.css';
import Input from './Input.js';
import Impact from './Impact.js';
import Action from './Action.js';

class App extends Component {

  
  render() {
    return (
      <div className="bg">
        <main>
          <div className="input">
            <Input />
          </div>
          <div className="impact">
            <Impact />
          </div>
          <div className="action">
            <Action />
          </div>
        </main>
      </div>
    );
  }
}


export default App;
