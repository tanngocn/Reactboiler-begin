import axios from 'axios';
import { API_URL } from './constants';

axios.defaults.baseURL = API_URL;

export default function requestHelper({ method, options }) {
  return axios({
    ...options,
    method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  }).then(response => response.data);
}
