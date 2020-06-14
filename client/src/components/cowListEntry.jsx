import React from 'react';

class CowListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowName: '',
      cowDesc: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.hanldeDelete = this.handleDelete.bind(this);
  }

  handleClick(cow) {
    this.props.showCurr({
      name: cow.name,
      description: cow.description,
    });
  }

  handleEdit(cow) {
    this.props.edit(cow);
  }

  handleDelete(cow) {
    console.log('COW TO BE DELETED', cow);
    this.props.delete(cow);
  }

  render() {
    return (
      <ul>
        {this.props.cows.map((cow, i) => {
          return (
            <React.Fragment key={i}>
              <li onClick={() => this.handleClick(cow)}>
                {cow.name}
                {'   '}
              </li>

              <input
                name="editCow"
                type="submit"
                value="Edit"
                onClick={() => this.handleEdit(cow)}
              ></input>
              <input
                name="deleteCow"
                type="submit"
                value="Delete"
                onClick={() => this.handleDelete(cow)}
              ></input>
            </React.Fragment>
          );
        })}
      </ul>
    );
  }
}

export default CowListEntry;
