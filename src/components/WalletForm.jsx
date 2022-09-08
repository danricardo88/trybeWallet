import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expensesAtt, fetchExpense, fetchReqWallet } from '../redux/actions/index';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class WalletForm extends Component {
  state = INITIAL_STATE;

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  componentDidUpdate(prevProps) {
    const { editor } = this.props;
    if (prevProps.editor !== editor && editor) {
      const { idToEdit, expenses } = this.props;
      const despesa = expenses
        .find(({ id }) => idToEdit === id);
      this.setState({
        value: despesa.value,
        currency: despesa.currency,
        method: despesa.method,
        tag: despesa.tag,
        description: despesa.description,
      });
    }
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    if (e.target.textContent === 'Adicionar despesa') {
      const { expensesData } = this.props;
      const { value, description, currency, method, tag } = this.state;
      const expenses = { value, description, currency, method, tag };
      expensesData(expenses);
      this.setState(INITIAL_STATE);
    } else {
      const { att } = this.props;
      const { value, description, currency, method, tag } = this.state;
      att({ value, description, currency, method, tag });
      this.setState(INITIAL_STATE);
    }
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editor } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="text"
              name="value"
              value={ value }
              data-testid="value-input"
              id="value"
              onChange={ this.handleChange }
            />
          </label>

          <br />

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>

          <br />

          <label htmlFor="currency">
            Moeda:
            <select
              type="text"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              {
                currencies.map((corrente, direction) => (
                  <option key={ direction }>{ corrente }</option>
                ))
              }
            </select>
          </label>

          <br />

          <label htmlFor="method">
            Método de pagamento:
            <select
              name="method"
              type="text"
              value={ method }
              onChange={ this.handleChange }
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>

            </select>
          </label>

          <br />

          <label htmlFor="tag">
            Tag:
            <select
              name="tag"
              type="text"
              value={ tag }
              onChange={ this.handleChange }
              data-testid="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <br />

          <button
            type="button"
            onClick={ this.onSubmit }
          >
            { !editor ? 'Adicionar despesa' : 'Editar despesa'}
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchReqWallet()),
    expensesData: (expense) => dispatch(fetchExpense(expense)),
    att: (expense) => dispatch(expensesAtt(expense)),
  };
}

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
    idToEdit: state.wallet.idToEdit,
    editor: state.wallet.editor,
    expenses: state.wallet.expenses,
  };
}

WalletForm.propTypes = {
  fetchData: PropTypes.func.isRequired,
  expensesData: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  att: PropTypes.func.isRequired,
};

WalletForm.defaultProps = {
  expenses: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
