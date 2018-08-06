import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Your Friends"
        onChange={searchChange}
         />
    </div>
  );
}

export default SearchBox;
