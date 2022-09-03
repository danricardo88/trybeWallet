import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// export default connect(passandoProps)(Header);

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <h3>WalletForm</h3>
        </div>
        <div>
          <span data-testid="email-field">
            {`E-mail: ${email}`}
          </span>

          <div>
            <span data-testid="total-field">0</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Header);
