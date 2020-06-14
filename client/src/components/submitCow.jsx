import React from 'react';

class SubmitCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCow({
      name: this.state.name,
      description: this.state.description,
    });

    this.setState({
      name: '',
      description: '',
    });
  }

  render() {
    return (
      <div>
        <h3>Add a Cow below!</h3>
        <form className="cow-form" onSubmit={this.handleSubmit}>
          <label>Input Cow Name: </label>
          <input
            id="name"
            type="text"
            placeholder="cow name"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
          ></input>
          <label>Input Cow Description: </label>
          <input
            id="description"
            text="text"
            placeholder="cow description"
            value={this.state.description}
            onChange={(event) => this.handleChange(event)}
          ></input>
          <input value="Add Cow!" type="submit" />
        </form>
      </div>
    );
  }
}

export default SubmitCow;
