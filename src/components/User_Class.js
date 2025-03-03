import React from "react";
class User_Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="card">
        <h3>Name: {this.props.name}</h3>
        <h3>count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Counter
        </button>
        <h3>Place: Thevally</h3>
        <h3>Age: 23</h3>
      </div>
    );
  }
}

export default User_Class;
