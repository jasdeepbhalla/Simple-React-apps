import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  render() {

    var courses = [
      { courseName: "Learn Angular in 30 Days!", coursePrice: 199},
      { courseName: "Learn Node.js in 30 Days!", coursePrice: 299},
      { courseName: "Learn React.js in 30 Days!", coursePrice: 399},
      { courseName: "Learn Ember.js in 30 Days!", coursePrice: 99}
    ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Buy Course online! </h2>

          <CourseSales items={courses}/>
        </header>

      </div>
    );
  }
}

export default App;
