import axios      from 'axios';
import {BASE_URL} from '../constants';

axios.interceptors.request.use(function(config) {
  //config.headers['authorization'] = '1';
  return config;
}, function(error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => response, async error => {
  alert(error.response.status);
  switch (error.response.status) {
    case 401:
      const {data} = await axios.post(BASE_URL + '/sign_in', {
        email: 'Londonemail1@gmail.com',
        password: 'password1',
      });
      error.config.headers.authorization = 1;
      return axios.request(error.config);
      alert('Intercept 401 response');
      break;
    default:
      alert(error);
      break;
  }
  return Promise.reject(error);
});

export const createTask = async (task) => axios.post(
    BASE_URL + 'task',
    task
);

export const getUserTasks = async () => axios.get(
    BASE_URL + 'tasks',
);
