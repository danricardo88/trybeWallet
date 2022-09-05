// Coloque aqui suas actions
// import LOGIN_SUBMIT from './typeActions';
import apiData from '../../components/api/apiServiços';
import { REQ_FAIL, LOGIN_SUBMIT, REQ_WALLET, WALLET_ACTIONS } from './typeActions';

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
