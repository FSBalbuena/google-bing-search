import React from 'react';
import PropTypes from 'prop-types';
const UiMessage = ({ text, isError }: { text: string; isError: boolean }) => {
  return (
    <p
      data-test="ui-message"
      className={`ui-message ${isError ? 'error' : ''}`}
    >
      {text}
    </p>
  );
};

UiMessage.propTypes = {
  text: PropTypes.string,
  isError: PropTypes.bool,
};

export default UiMessage;
