import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import CowList from './components/cowlist';
import SubmitCow from './components/submitCow';
import CowModal from './components/cowModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      currCow: {},
      currCowSelected: false,
    };
    this.addCow = this.addCow.bind(this);
    this.getCurrCow = this.getCurrCow.bind(this);
  }

  componentDidMount() {
    this.loadCows();
  }

  loadCows() {
    return axios
      .get('/api/cows')
      .then(({ data }) => {
        let state = this.state.cows.slice();
        state.push(data);
        this.setState({
          cows: data,
        });
      })
      .catch((err) => console.log(err));
  }

  addCow(cow) {
    axios
      .post('api/cows', cow)
      .then(() => console.log('Succesfully added cow!'))
      .catch((err) => console.log('something went wrong', err));

    this.loadCows();
  }

  getCurrCow(cow) {
    this.setState({
      currCow: cow,
      currCowSelected: true,
    });
  }

  render() {
    return (
      <div>
        <h1>This is CowList!</h1>
        {this.state.currCowSelected ? (
          <CowModal cow={this.state.currCow} />
        ) : (
          <div></div>
        )}
        <CowList cows={this.state.cows} clickHandler={this.getCurrCow} />
        <SubmitCow addCow={this.addCow} />
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
