import React from 'react';

const CowModal = (props) => {
  return (
    <div>
      <h3>This is your Selected Cow!</h3>
      <p>
        <strong>Name: </strong>
        {props.cow.name}
      </p>
      <p>
        <strong>Description: </strong>
        {props.cow.description}
      </p>
    </div>
  );
};

export default CowModal;
