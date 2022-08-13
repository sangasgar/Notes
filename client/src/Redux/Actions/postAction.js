import axios from 'axios';
import { SERVICE_2 } from '../../server/server';
import { SET_POST } from '../type';

export const postAction = (value) => ({
  type: SET_POST,
  payload: value,
});

export const createPost = (value) => (dispatch) => {
  axios.post(`${SERVICE_2}/posts`, value).then((res) => dispatch(postAction(res.data))).catch((res) => { dispatch(postAction(res.data)); });
};
export const updatePost = (value) => (dispatch) => {
  axios.put(`${SERVICE_2}/posts`, value).then((res) => dispatch(postAction(res.data))).catch((res) => { dispatch(postAction(res.data)); });
};
export const deletePost = (value) => (dispatch) => {
  axios.delete(`${SERVICE_2}/posts/${value}`).then((res) => dispatch(postAction(res.data))).catch((res) => { dispatch(postAction(res.data)); });
};
