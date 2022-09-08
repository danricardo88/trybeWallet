import {
  REQ_WALLET,
  WALLET_ACTIONS,
  REQ_FAIL,
  EXPENSE_SUB,
  EXPENSE_DELETE } from '../actions/typeActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  error: '',
  testFetchin: false,
  // total: 0,
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
      currencies: Object.keys(action.currencies)
        .filter((corrente) => corrente !== 'USDT'),
      testFetchin: false,
    };

  case REQ_FAIL:
    return {
      ...state,
      error: action.error,
    };

  case EXPENSE_SUB:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.expense,
          id: state.expenses.length,
        },
      ],
    };
  case EXPENSE_DELETE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };

  default:
    return state;
  }
};
export default wallet;
