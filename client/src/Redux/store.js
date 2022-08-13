import { configureStore } from '@reduxjs/toolkit';
import postReducers from './Reducers/postReducers';
import postsReducers from './Reducers/postsReducers';
import userReducers from './Reducers/userReducers';

const store = configureStore({
  reducer: {
    user: userReducers,
    post: postReducers,
    posts: postsReducers,
  },
});

export default store;
