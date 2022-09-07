import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// export default connect(passandoProps)(Header);

class Header extends Component {
  calcularDespesas = () => {
    const { expenses } = this.props;
    let totalSoma = 0;
    const test = expenses;
    test.forEach((element) => {
      totalSoma += parseFloat(element.value)
      * parseFloat(element.exchangeRates[element.currency].ask);
    });
    return totalSoma.toFixed(2);
  };

  render() {
    const { email } = this.props;

    return (
      <header>
        <div>
          <h3>WalletForm</h3>
        </div>
        <div>
          <span data-testid="email-field">
            email:
            <div>{email}</div>
          </span>
          <br />
          <div>
            <span data-testid="total-field">{this.calcularDespesas()}</span>
            {/* <span data-testid="total-field">{total.toFixed(2)}</span> */}
            <br />
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  // total: state.wallet.total,
});

// const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
//   email,
//   expenses,
// });

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
};

Header.defaultProps = {
  expenses: [],
};
export default connect(mapStateToProps)(Header);
