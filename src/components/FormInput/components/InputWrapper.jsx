import React from 'react';
import PropTypes from 'prop-types';

const InputWrapper = ({
  val,
  isLoading,
  handleChange,
  handleSearchEngine,
  searchType,
}) => {
  return (
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
  );
};

InputWrapper.propTypes = {
  val: PropTypes.string,
  isLoading: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSearchEngine: PropTypes.func,
  searchType: PropTypes.array,
};

export default InputWrapper;
