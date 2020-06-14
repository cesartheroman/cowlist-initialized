import React from 'react';
import ReactDOM from 'react-dom';

import CowList from './components/cowlist';
import SubmitCow from './components/submitCow';
import CowModal from './components/cowModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [
        {
          name: 'Buttercup',
          description:
            'herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.',
        },
        {
          name: 'MooLawn',
          description:
            'a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.',
        },
      ],
      currCow: {},
      currCowSelected: false,
    };
    this.addCow = this.addCow.bind(this);
    this.getCurrCow = this.getCurrCow.bind(this);
  }

  addCow(cow) {
    console.log('COW OBJECT:', cow);
    let temp = this.state.cows.slice();
    temp.push(cow);
    this.setState({
      cows: temp,
    });
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
