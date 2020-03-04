import axios      from 'axios';
import {BASE_URL} from '../constants';

export const getUsers = async () => axios.get(
    BASE_URL + 'users',
);