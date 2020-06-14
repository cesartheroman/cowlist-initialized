import React from 'react';

class SubmitCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event, id) {
    this.setState({
      [id]: event.target.value,
    });
  }

  handleClick() {
    event.preventDefault();
    console.log('clicked!');
  }

  render() {
    return (
      <form className="cow-form">
        <label>Input Cow Name: </label>
        <input
          id="name"
          type="text"
          placeholder="cow name"
          onChange={(event, id) => this.handleChange(event, id)}
        ></input>
        <label>Input Cow Description: </label>
        <input
          id="description"
          text="text"
          placeholder="cow description"
          onChange={(event, id) => this.handleChange(event, id)}
        ></input>

        <button onClick={this.handleClick}>Add Cow!</button>
      </form>
    );
  }
}

export default SubmitCow;
