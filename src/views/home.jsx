import React from 'react';
import { uniqueId } from 'lodash';
import { ViewContainer } from '../components/container';
import data from '../utils/response';
import filterData from '../utils/filterData';

import ItemBooking from '../components/itemBooking';

const Home = () => {
  const values = filterData(data);

  const response = values.map((item) => {
    const {
      bookingId, bookingTime, streetAddress, bookingPrice, firstName, lastName,
    } = item;
    return (
      <div
        key={uniqueId()}
        style={
          {
            marginBottom: '1rem',
            textAlign: 'left',
            border: '.1rem solid',
            fontSize: '1rem',
            width: '27%',

          }
        }
      >
        <ItemBooking id="bookingId" value={bookingId || '--'} />
        <ItemBooking id="name" value={(firstName && lastName) ? `${firstName} ${lastName}` : '--'} />
        <ItemBooking id="bookingTime" value={bookingTime || '--'} />
        <ItemBooking id="streetAddress" value={streetAddress || '--'} />
        <ItemBooking id="bookingPrice" value={bookingPrice || '--'} />
      </div>
    );
  });

  return (
    <ViewContainer>
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '1rem 3rem',
      }}
      >
        { response }
      </div>
    </ViewContainer>
  );
};
export default Home;
