import axios from 'axios';

const apiCall = (url, method, data = null, headers = null) => axios({
  method,
  url,
  data,
  headers,
});

export default apiCall;
