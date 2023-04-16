import React, { Component } from "react";

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let random = Math.floor(Math.random() * this.props.max) + 1;
    this.setState({ value: random });
  }
  render() {
    return (
      <>
        <h1 className="number">Number is : {this.state.value}</h1>
        <div className="number1">
          {this.state.value === 7 ? (
            "Won!!!"
          ) : (
            <button onClick={this.handleClick}>
              {this.state.value === 7 ? "Won!!!" : "Click!!!"}
            </button>
          )}
        </div>
      </>
    );
  }
}
export default Number;
