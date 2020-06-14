import React from 'react';

const CowList = (props) => {
  return (
    <ul>
      {props.cows.map((cow) => {
        return (
          <li
            onClick={() =>
              props.clickHandler({
                name: cow.name,
                description: cow.description,
              })
            }
          >
            {cow.name}
          </li>
        );
      })}
    </ul>
  );
};

export default CowList;
