import {
  SET_LANGUAGE,
  SET_INFO_COUNTRY,
  SET_INFO_COUNTRY_SUCCESS,
  SET_INFO_COUNTRY_ERROR,
} from '../types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_INFO_COUNTRY:
      return { ...state, countryLoading: true };
    case SET_INFO_COUNTRY_SUCCESS:
      return { ...state, countryLoading: false, country: payload };
    case SET_INFO_COUNTRY_ERROR:
      return { ...state, countryLoading: false };
    case SET_LANGUAGE:
      return { ...state, language: payload };
    default:
      return { ...state };
  }
};
