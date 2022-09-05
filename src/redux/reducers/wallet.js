import { REQ_WALLET, WALLET_ACTIONS, REQ_FAIL } from '../actions/typeActions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  error: '',
  testFetchin: false,
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQ_WALLET:
    return {
      ...state,
      testFetchin: true,
    };
  case WALLET_ACTIONS:
    return {
      ...state,
      currencies: action.currency,
      testFetchin: false,
    };
  case REQ_FAIL:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};
export default wallet;
