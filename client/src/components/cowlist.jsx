import React from 'react';
import CowListEntry from './cowListEntry';

const CowList = (props) => {
  return (
    <CowListEntry
      cows={props.cows}
      showCurr={props.showCurr}
      edit={props.edit}
      delete={props.delete}
    />
  );
};

export default CowList;
