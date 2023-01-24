import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://todo-api-desing.onrender.com',
  headers: {
    Accept: 'application / json',
  },
});

export default instance;
