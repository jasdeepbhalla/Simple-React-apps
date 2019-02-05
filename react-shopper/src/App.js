import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  selectTab = (index) => {
    this.setState({selectedTab: index});
  }



  render() {

    let {selectedTab} = this.state;

    return (
      <div className="App">
        <nav className="App-nav">
          <ul>
            <li className="App-nav-item"><a>Items</a></li>
            <li className="App-nav-item"><a>Cart</a></li>
            <li></li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default App;
