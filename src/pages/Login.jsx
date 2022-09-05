import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginActions from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    senha: '',
    button: true,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, this.validador);
  };

  validador = () => {
    const { email, senha } = this.state;
    const minimo = 6;
    const senhaMin = senha.length >= minimo;
    // const regexDoEmail = regex.test(email); // não sei se vai funcionar peguei no google... olhar isso dps. //  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); <- regex original, tive que remover as barras \ por causa do lint.
    const regex = '[a-z0-9]+@[a-z]+\\.[a-z]{2,3}';
    const mailFormat = new RegExp(regex);
    const regexDoEmail = mailFormat.test(email);
    const bum = senhaMin && regexDoEmail;
    this.setState({
      button: !bum,
    });
    // return !(regexDoEmail && senhaMin);
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(loginActions(email));
    history.push('/carteira');
  };

  render() {
    const { button, email, senha } = this.state;

    return (
      <div>
        <form>
          <h2>TrybeWallet</h2>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
          <br />
          <input
            type="password"
            placeholder="Senha"
            name="senha"
            id="senha"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ senha }
          />
          <button
            type="submit"
            disabled={ button }
            onClick={ this.onSubmit }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
