import {
  REQ_WALLET,
  WALLET_ACTIONS,
  REQ_FAIL,
  EXPENSE_SUB } from '../actions/typeActions';

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
      // testFetchin: false, <-- descomentar se o cod continuar quebrendo, NÃO É ISSO
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
      // total: [
      //   ...state.expenses, action.expense]
      //   .reduce((acc, { value, currency, exchangeRates }) => {
      //     const total = acc + value * exchangeRates[currency].ask;
      //     return total;
      //   }, 0),
    };
  default:
    return state;
  }
};
export default wallet;
