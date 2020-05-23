import React from 'react';
import PropTypes from 'prop-types';
import Label from './label';

const ItemBooking = ({ id, value }) => (

  <div>
    <span>
      <Label id={id} />
      {' : '}
    </span>
    <span>
      {value}
    </span>
  </div>
);
ItemBooking.defaultProps = {
  id: '',
  value: '',
};
ItemBooking.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
};
export default ItemBooking;
