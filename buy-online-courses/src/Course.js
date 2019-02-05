import React, {Component} from 'react';

class Course extends Component{

  clicker(){
    var active = !this.state.active;
    this.setState({active: active});
    this.props.sumPrice(active ? this.props.coursePrice : -this.props.coursePrice);

  }

  constructor(props){
    super(props);

    this.state = {
      active: false
    };

    this.clicker = this.clicker.bind(this);
  }

  render(){
    return(
      <div>
        <p onClick={this.clicker}>{this.props.courseName} <b>{this.props.coursePrice}</b></p>
      </div>
    );
  }
}

export default Course;
