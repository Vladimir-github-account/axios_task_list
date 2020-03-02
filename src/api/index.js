import axios        from 'axios';
import { BASE_URL } from '../constants';

axios.interceptors.request.use( function(config) {
  config.headers['authorization'] = '1';
  return config;
}, function(error) {
  return Promise.reject( error );
} );

export const createTask = async (task) => axios.post(
    BASE_URL + 'task',
    task
);

export const getUserTasks = async () => axios.get(
    BASE_URL + 'tasks',
);