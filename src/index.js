import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  handleSingleClickEvent = () => alert("Single Click Event Triggered");
  handleDoubleClickEvent = () => alert("Double Click Event Triggered");
  handleMoseEnterEvent = () => alert("Mouse Enter Event Triggered");
  handleMoseLeaveEvent = () => alert("Mouse Leave Event Triggered");
  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div className="APP">
        <h1>Event Handlers</h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleSingleClickEvent}>
          Single Click Handler
        </button>
        <button onDoubleClick={this.handleDoubleClickEvent}>
          Double Click Handler
        </button>
        <div onMouseEnter={this.handleMoseEnterEvent}>Mouse Enter</div>
        <div onMouseLeave={this.handleMoseLeaveEvent}>Mouse Leave</div>
        <input
          type="text"
          placeholder="Change me"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
