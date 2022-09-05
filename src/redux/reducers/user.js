import { LOGIN_SUBMIT } from '../actions/typeActions';

const INITIAL_STATE = {
  // user: {
  email: '', // string que armazena o email da pessoa usuária
  // }
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_SUBMIT:
    return {
      ...state,
      email: action.payload,
    };
  default: return state;
  }
}
export default user;
