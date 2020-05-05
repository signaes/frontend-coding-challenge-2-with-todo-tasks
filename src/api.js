import axios from 'axios';

const client = axios.create({
  baseURL: '/',
});

const api = {
  questions: {
    get: () => client.get('/questions').then(response => response.data)
  },
  choices: {
    vote: (url) => client.post(url)
  },
}


export default api;
