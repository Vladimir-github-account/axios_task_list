import axios from 'axios';

axios.interceptors.request.use( function(config) {
  config.headers['authorization'] = '1';
}, function(error) {
  return Promise.reject( error );
} );

export const createTask = async () => axios.post(
    'http://localhost:5000/api/task',
    {
      value: 'Axios Task Value',
      isDone: true,
      deadline: '2020-03-30',
      userId: 1
    }
);