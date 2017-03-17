import React, { PropTypes } from 'react';

export default Header = ({key, children}) => {
  return (
    <header>
      <div className="header-content">
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
}