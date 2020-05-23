import { SET_LANGUAGE, SET_INFO_COUNTRY } from '../types';

export const setLanguage = (payload) => ({ type: SET_LANGUAGE, payload });
export const setInfoCountry = () => ({ type: SET_INFO_COUNTRY });
