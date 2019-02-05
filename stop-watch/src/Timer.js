import React, { Component } from 'react';

class Timer extends Component{

    componentDidMount(){
      this.timer = setInterval(this.ticker, 1000)
    }

    ticker(){
      this.setState({clock: new Date() - this.props.startTime})
    }

    constructor(props){
      super(props);
      this.state = {
        clock: 0
      };

      this.ticker = this.ticker.bind(this); // this will be undefined if you dont bind it in this step
    }

    render(){
      var clock = Math.round(this.state.clock / 1000)

      return(
        <div>
          <h1>You are on this page since: </h1>
          <span>{ clock }</span><p>Seconds</p>
        </div>
      );
    }
}

export default Timer;
