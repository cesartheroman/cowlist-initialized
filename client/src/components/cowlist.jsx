import React from 'react';

const CowList = (props) => {
  return (
    <ul>
      {props.cows.map((cow, i) => {
        return (
          <li
            key={i}
            onClick={() =>
              props.clickHandler({
                name: cow.name,
                description: cow.description,
              })
            }
          >
            {cow.name}
            {'   '}
            <input name="editCow" type="submit" value="Edit"></input>
            {'   '}
            <input name="deleteCow" type="submit" value="Delete"></input>
          </li>
        );
      })}
    </ul>
  );
};

export default CowList;
