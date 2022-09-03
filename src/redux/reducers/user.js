import LOGIN_SUBMIT from '../actions/typeActions';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

const user = (state = INITIAL_STATE, action) => {
  switch ( action.type ) {
    case LOGIN_SUBMIT:
      return {
        ...state,
        email: action.email,
      };
    default: return state,
  }
};

export default user;
