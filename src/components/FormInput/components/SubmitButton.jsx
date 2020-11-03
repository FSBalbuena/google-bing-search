import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ isLoading, submitText }) => {
  return (
    <button
      type="submit"
      id="form-submit"
      data-test="form-submit"
      disabled={isLoading}
    >
      {submitText}
    </button>
  );
};

SubmitButton.propTypes = {
  isLoading: PropTypes.bool,
  submitText: PropTypes.string,
};

export default SubmitButton;
