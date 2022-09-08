import { REQ_WALLET,
  WALLET_ACTIONS,
  REQ_FAIL,
  EXPENSE_SUB,
  EXPENSE_DELETE,
  EXPENSE_EDIT,
  EXPENSE_ATT } from '../actions/typeActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  let editado = [];
  switch (action.type) {
  case REQ_WALLET:
    return {
      ...state,
    };
  case WALLET_ACTIONS:
    return {
      ...state,
      currencies: Object.keys(action.currencies)
        .filter((corrente) => corrente !== 'USDT'),
    };
  case REQ_FAIL:
    return {
      ...state,
      error: action.error,
    };
  case EXPENSE_SUB:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expense, id: state.expenses.length }],
    };
  case EXPENSE_DELETE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  case EXPENSE_EDIT:
    return { ...state, editor: true, idToEdit: action.id };
  case EXPENSE_ATT:
    editado = state.expenses.reduce((acc, current) => {
      if (current.id === state.idToEdit) {
        current.value = action.expenses.value;
        current.tag = action.expenses.tag;
        current.description = action.expenses.description;
        current.currency = action.expenses.currency;
        current.method = action.expenses.method;
      }
      acc.push(current);
      return acc;
    }, []);
    return {
      ...state, expenses: [...editado], idToEdit: 0, editor: false,
    };
  default:
    return state;
  }
};
export default wallet;
