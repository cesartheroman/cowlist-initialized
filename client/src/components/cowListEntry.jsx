import React from 'react';
import CowModal from './cowModal';

class CowListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowName: '',
      cowDesc: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClick(cow) {
    this.props.showCurr({
      name: cow.name,
      description: cow.description,
    });
  }

  handleEdit(cow) {
    // console.log(cow);
    this.props.edit(cow);
  }

  render() {
    return (
      <ul>
        {this.props.cows.map((cow, i) => {
          return (
            <li key={i} onClick={() => this.handleClick(cow)}>
              {cow.name}
              {'   '}
              <input
                name="editCow"
                type="submit"
                value="Edit"
                onClick={() => this.handleEdit(cow)}
              ></input>
              {'   '}
              <input
                name="deleteCow"
                type="submit"
                value="Delete"
                onClick={() => this.props.delete(cow)}
              ></input>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CowListEntry;
