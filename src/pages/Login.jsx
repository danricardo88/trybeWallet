import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropyTypes from 'prop-types';
import login from '../redux/actions';

export default connect()(Login);

class Login extends Component {
  state = {
    email: '',
    senha: '',
    button: false,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
      button: this.validador(),
    });
  };

  validador = () => {
    const { email, senha } = this.state;
    const minimo = 6;
    const senhaMin = senha.length > minimo;
    const regexDoEmail = /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(.\w{2,3})+$/.test(email); // não sei se vai funcionar peguei no google... olhar isso dps. //  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); <- regex original, tive que remover as barras \ por causa do lint.
    return !(regexDoEmail && senhaMin);
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(login(email));
    history.push('/carteira');
  };

  render() {
    const { button } = this.state;

    return (
      <div>
        <fieldset onSubmit={ this.onSubmit }>
          <h2>TrybeWallet</h2>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            type="senha"
            placeholder="Senha"
            name="senha"
            id="senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button type="submit" disabled={ button }>Entrar</button>
        </fieldset>
      </div>
    );
  }
}

Login.PropyTypes = {
  history: PropyTypes.shape({
    push: PropyTypes.func.isRequired,
  }).isRequired,
  dispatch: PropyTypes.func.isRequired,
};
