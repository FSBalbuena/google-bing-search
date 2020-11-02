import React, { useState } from 'react';

const FormInput = () => {
  const searchType = ['google', 'bing', 'both'];

  const [val, setVal] = useState('');
  const [searchEngine, setSearchEngine] = useState(searchType[0]);
  const handleChange = e => {
    setVal(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Hit me on a click event');
    console.log(val);
    console.log(searchEngine);
  };
  const handleEnter = e => (e.keyCode == 13 ? handleSubmit(e) : null);
  const handleSearchEngine = e => {
    setSearchEngine(e.target.value);
  };

  return (
    <form
      id="search-form"
      data-test="search-form"
      onSubmit={handleSubmit}
      onKeyPress={handleEnter}
    >
      <div id="form-input-wrapper" data-test="form-input-wrapper">
        <input value={val} onChange={handleChange} />
        <select onChange={handleSearchEngine}>
          {searchType.map(type => (
            <option value={type} key={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" id="form-submit" data-test="form-submit">
        {'Search'}
      </button>
    </form>
  );
};

export default FormInput;
