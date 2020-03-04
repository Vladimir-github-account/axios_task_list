import axios      from 'axios';
import {BASE_URL} from '../constants';

export const signIn = async (login, password) => axios.post(
    BASE_URL + 'sign_in', {login, password}
);
export const signUp = async (data) => axios.post(
    BASE_URL + 'sign_up', {data}
);