import axios from 'axios';
import { SERVICE_1 } from '../../server/server';
import { SET_USER } from '../type';

export const userActions = (value) => ({
  type: SET_USER,
  payload: value,
});

export const getUser = (value) => (dispatch) => {
  axios.post(`${SERVICE_1}/users`, value).then((res) => {
    localStorage.setItem('token', res.data.token);
    dispatch(userActions(res.data));
  }).catch((res) => dispatch(userActions(res.data)));
};
export const regUser = (value) => (dispatch) => {
  axios.post(`${SERVICE_1}/users/register`, value).then((res) => {
    const user = {
      id: res.data.id, name: res.data.name, email: res.data.email, error: res.data.error,
    };
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
  axios.post(`${SERVICE_1}/users/check`, {}, option).then((res) => {
    const user = { id: res.data.id, name: res.data.name, email: res.data.email };
    dispatch(userActions(user));
  }).catch((res) => dispatch(userActions(res.data)));
};

export const editUser = (value) => (dispatch) => {
  axios.put(`${SERVICE_1}/users`, value).then((res) => {
    const user = { id: res.data.id, name: res.data.name, email: res.data.email };
    dispatch(userActions(user));
  }).catch((res) => dispatch(userActions(res.data)));
};
export const logout = () => {
  localStorage.removeItem('token');
};
