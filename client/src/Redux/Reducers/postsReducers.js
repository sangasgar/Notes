/* eslint-disable default-param-last */
const { SET_POSTS } = require('../type');

function postsReducers(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_POSTS:
      return payload;
    default:
      return state;
  }
}
export default postsReducers;
