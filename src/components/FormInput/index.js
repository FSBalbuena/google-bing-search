import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { searchForQuery } from 'store/actions/search-actions';
import SubmitButton from './components/SubmitButton';
import InputWrapper from './components/InputWrapper';
const FormInput = ({ isLoading }) => {
  const searchType = ['google', 'bing', 'both'];
  const dispatch = useDispatch();
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
  const inputProps = {
    val,
    isLoading,
    handleChange,
    handleSearchEngine,
    searchType,
  };
  return (
    <form
      id="search-form"
      data-test="search-form"
      onSubmit={handleSubmit}
      onKeyPress={handleEnter}
    >
      <InputWrapper {...inputProps} />
      <SubmitButton submitText={'Search'} isLoading={isLoading} />
    </form>
  );
};

FormInput.propTypes = {
  isLoading: PropTypes.bool,
};

export default FormInput;
