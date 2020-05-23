import React from 'react';
import PropTypes from 'prop-types';

const ViewContainer = ({ children, classname }) => (
  <div className="view-container">
    <div className={`view-container__content ${classname}`}>
      { children }
    </div>
  </div>
);

ViewContainer.propTypes = {
  children: PropTypes.string,
  classname: PropTypes.string,
};
ViewContainer.defaultProps = {
  children: null,
  classname: '',
};

export default ViewContainer;
