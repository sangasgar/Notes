/* eslint-disable default-param-last */
const { SET_USER } = require('../type');

function userReducers(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
}
export default userReducers;
