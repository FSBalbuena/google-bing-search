//TODO: TS fix type for dispatch
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { searchForQuery, searchTypes } from 'store/actions/search-actions';
import SubmitButton from './components/SubmitButton';
import InputWrapper from './components/InputWrapper';
import { SearchTypes } from 'services';
const FormInput = ({ isLoading }: { isLoading: boolean }) => {
  const searchType = Object.keys(searchTypes) as SearchTypes[];
  const dispatch = useDispatch();
  const [val, setVal] = useState('');
  const [searchEngine, setSearchEngine] = useState<SearchTypes>(searchType[0]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(searchForQuery(searchEngine, val));
  };
  const handleEnter = (e: React.KeyboardEvent) =>
    e.keyCode == 13 ? handleSubmit(e) : null;
  const handleSearchEngine = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchEngine(e.target.value as SearchTypes);
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
