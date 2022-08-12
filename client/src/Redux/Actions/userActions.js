import axios from 'axios';
import { SET_USER } from '../type';

export const userActions = (value) => ({
  type: SET_USER,
  payload: value,
});

export const getUser = (value) => (dispatch) => {
  axios.post('http://localhost:3002/users', value).then((res) => {
    localStorage.setItem('token', res.data.token);
    dispatch(userActions(res.data));
  }).catch((res) => dispatch(userActions(res.data)));
};
export const regUser = (value) => (dispatch) => {
  axios.post('http://localhost:3002/users/register', value).then((res) => {
    const user = { id: res.data.id, name: res.data.name, email: res.data.email };
    localStorage.setItem('token', res.data.token);
    dispatch(userActions(user));
  }).catch((res) => dispatch(userActions(res.data)));
};
export const chekUser = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const option = {
    headers: {
      authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  axios.post('http://localhost:3002/users/check', {}, option).then((res) => {
    const user = { id: res.data.id, name: res.data.name, email: res.data.email };
    dispatch(userActions(user));
  }).catch((res) => dispatch(userActions(res.data)));
};

export const editUser = (value) => (dispatch) => {
  axios.put('http://localhost:3002/users', value).then((res) => {
    const user = { id: res.data.id, name: res.data.name, email: res.data.email };
    dispatch(userActions(user));
  }).catch((res) => dispatch(userActions(res.data)));
};
export const logout = () => {
  localStorage.removeItem('token');
};
