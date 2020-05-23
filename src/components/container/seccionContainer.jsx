import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../index';

const SeccionContainer = ({ content, label }) => (
  <div className="seccion-container">
    <div className="seccion-container__label">
      <Label id={label} />
    </div>
    <div className="seccion-container__content">
      {content}
    </div>
  </div>
);

SeccionContainer.propTypes = {
  content: PropTypes.element,
  float: PropTypes.string,
  label: PropTypes.string,
};
SeccionContainer.defaultProps = {
  content: null,
  float: 'left',
  label: '',
};

export default SeccionContainer;
