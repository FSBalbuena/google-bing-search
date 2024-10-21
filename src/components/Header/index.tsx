import React from 'react';
import PropTypes from 'prop-types';
//TODO: TS fix image type support
const Header = ({ logo, slogan }: { logo: string; slogan: string }) => {
  return (
    <header data-test="header" id="image-header">
      <img data-test="logo" src={logo} alt="Logo" id="company-logo" />
      <p data-test="slogan">{slogan}</p>
    </header>
  );
};

Header.defaultProps = {
  logo: '/logo.svg',
  slogan: 'Search',
};
Header.propTypes = {
  logo: PropTypes.string,
  slogan: PropTypes.string,
};

export default Header;
