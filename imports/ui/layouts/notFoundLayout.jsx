import React, { PropTypes } from 'react';
import NotFound from '../components/NotFound.jsx';

export default NotFoundLayout = (props) => {
  return (
    <div className='flex-row'>
      <div className='flex-column'>
        <NotFound />
      </div>
    </div>
  );
}

NotFoundLayout.propTypes = {
  
}