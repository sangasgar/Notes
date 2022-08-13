import axios from 'axios';
import { SERVICE_2 } from '../../server/server';
import { SET_POSTS } from '../type';

export const postsAction = (value) => ({
  type: SET_POSTS,
  payload: value,
});

export const getPosts = () => (dispatch) => {
  axios.get(`${SERVICE_2}/posts`).then((res) => dispatch(postsAction(res.data))).catch((res) => dispatch(postsAction(res.data)));
};
