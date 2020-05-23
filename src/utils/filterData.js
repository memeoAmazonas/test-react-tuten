import {
  includes
} from 'lodash';
import filterDeep from 'deepdash-es/filterDeep';

const setDate = (data) => {
  const currentDate = new Date(data);
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  return `${month + 1}/${date}/${year}`;
};

export default (data) => {
  const ids = ['bookingId', 'bookingTime', 'streetAddress', 'bookingPrice', 'firstName', 'lastName'];
  let values = {};
  let names = [];
  const response = [];
  filterDeep(
    data, (value, key) => {
      if (includes(ids, key)) {
        if (includes(names, key)) {
          response.push(values);
          names = [];
          values = [];
        } else {
          names.push(key);
        }
        const val = key === 'bookingTime' ? setDate(value) : value;
        values = ({ [key]: val, ...values });
      }
    },
  );
  return response;
};
