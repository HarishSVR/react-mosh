import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    tags: [],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <div>
          {this.state.tags.length === 0 && "Please create a new tag!!"}
          {this.renderTags()}
        </div> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badges m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
