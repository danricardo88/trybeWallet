// Coloque aqui suas actions
// import LOGIN_SUBMIT from './typeActions';
import apiData from './apiServiços';
import {
  REQ_FAIL,
  LOGIN_SUBMIT,
  REQ_WALLET,
  WALLET_ACTIONS,
  EXPENSE_SUB,
  EXPENSE_DELETE } from './typeActions';

export default function loginActions(payload) {
  return {
    type: LOGIN_SUBMIT,
    payload,
  };
}

const reqWallet = () => ({
  type: REQ_WALLET,
});

const walletActions = (currencies) => ({
  type: WALLET_ACTIONS,
  currencies,
});

const reqFail = (errorMessage) => ({
  type: REQ_FAIL,
  error: errorMessage,
});

const expensesSub = (expense) => ({
  type: EXPENSE_SUB,
  expense,
});

export const expensesDelete = (id) => ({
  type: EXPENSE_DELETE,
  id,
});

export const fetchReqWallet = () => async (dispatch) => {
  dispatch(reqWallet());
  try {
    const response = await apiData();
    const tudoOk = walletActions(response);
    dispatch(tudoOk);
  } catch (error) {
    const deuRuim = reqFail(error);
    dispatch(deuRuim);
  }
};
// export default login, fetchReqWallet;

export const fetchExpense = (expense) => async (dispatch) => {
  const { value, description, currency, method, tag } = expense;
  const exchangeRates = await apiData();
  delete exchangeRates.USDT;
  const expenses = { value, description, currency, method, tag, exchangeRates };
  dispatch(expensesSub(expenses));
};
