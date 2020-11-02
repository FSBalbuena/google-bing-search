import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchForQuery } from 'store/actions/search-actions';
const FormInput = () => {
  const searchType = ['google', 'bing', 'both'];
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.search);
  const [val, setVal] = useState('');
  const [searchEngine, setSearchEngine] = useState(searchType[0]);
  const handleChange = e => {
    setVal(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchForQuery(searchEngine, val));
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
        <input value={val} onChange={handleChange} disabled={isLoading} />
        <select onChange={handleSearchEngine}>
          {searchType.map(type => (
            <option value={type} key={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        id="form-submit"
        data-test="form-submit"
        disabled={isLoading}
      >
        {'Search'}
      </button>
    </form>
  );
};

export default FormInput;
