import axios from 'axios';

export const getListUsers = () => axios.get('https://reqres.in/api/users/');
