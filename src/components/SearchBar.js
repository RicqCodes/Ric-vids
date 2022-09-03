import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    onTermSubmit(term);
  };
  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        type="text"
        placeholder="Search"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
