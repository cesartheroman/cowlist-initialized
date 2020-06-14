import React from 'react';
import ReactDOM from 'react-dom';

import Cowlist from './components/cowlist';
import SubmitCow from './components/submitCow';

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
    };
  }
  render() {
    return (
      <div>
        <h1>This is CowList!</h1>
        <Cowlist cows={this.state.cows} />
        <SubmitCow />
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
