import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ isLoading, sumbitText }) => {
  return (
    <button
      type="submit"
      id="form-submit"
      data-test="form-submit"
      disabled={isLoading}
    >
      {sumbitText}
    </button>
  );
};

SubmitButton.propTypes = {
  isLoading: PropTypes.bool,
  sumbitText: PropTypes.string,
};

export default SubmitButton;
