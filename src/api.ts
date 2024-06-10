import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 1000,
});

export default instance;