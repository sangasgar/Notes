/* eslint-disable default-param-last */
const { SET_POST } = require('../type');

function postReducers(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_POST:
      return payload;
    default:
      return state;
  }
}
export default postReducers;
