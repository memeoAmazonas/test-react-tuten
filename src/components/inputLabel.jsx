import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { SeccionContainer } from './container';
import { Label } from './index';

const InputLabel = ({ label, type, onchange }) => (
  <div className="input-label-container">
    <span className="input-label-container__label">
      <Label id={label} />
    </span>
    <FormattedMessage id={label}>
      {(placeholder) => (
        <input type={type} placeholder={placeholder} onChange={onchange} className="input-label-container__input" />
      )}
    </FormattedMessage>
  </div>
);

InputLabel.defaultProps = {
  label: '',
  type: 'text',
  onchange: null,
};

InputLabel.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onchange: PropTypes.func,
};

export default InputLabel;
