// Coloque aqui suas actions
import LOGIN_SUBMIT from './typeActions';

const login = (email) => ({
  type: LOGIN_SUBMIT,
  email,
});

export default login;
