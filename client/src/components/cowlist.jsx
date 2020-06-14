import React from 'react';

const Cowlist = (props) => {
  return (
    <ul>
      {props.cows.map((cow) => {
        return <li>{cow.name}</li>;
      })}
    </ul>
  );
};

export default Cowlist;
