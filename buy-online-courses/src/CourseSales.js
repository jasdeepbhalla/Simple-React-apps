import React, {Component} from 'react';
import Course from './Course'

class CourseSales extends Component{

  sumPrice(price){
    this.setState({total: this.state.total + price});
  }

  constructor(props){
    super(props);

    this.state = {
      total: 0
    };

    this.sumPrice = this.sumPrice.bind(this);
  }

  render(){

    var courses = this.props.items.map((item, i) => {
      return <Course courseName={item.courseName} coursePrice={item.coursePrice} key={i} sumPrice={this.sumPrice} active={item.active} />
    });

    return(
      <div>
        <h3>List of courses:</h3>
        <div id="courses">
        {courses}
        <p id="total">Total: <b>{this.state.total}</b></p>
        </div>
      </div>
    );
  }


}

export default CourseSales;
