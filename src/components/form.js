import React, { Component } from "react";

class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      select: "html",
    };
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleChangeComment = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleChangeSelect = (event) => {
    this.setState({
      select: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.select}`);
    event.preventDefault();
  };
  render() {
    // const { username, comments, select } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChangeUsername}
          />
        </div>

        <div>
          <label> TextArea</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleChangeComment}
          ></textarea>
        </div>
        <div>
          <label>Select</label>
          <select value={this.state.select} onChange={this.handleChangeSelect}>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JS</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default form;
