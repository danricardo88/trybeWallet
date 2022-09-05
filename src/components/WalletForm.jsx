// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { fetchReqWallet } from '../redux/actions';

// class WalletForm extends Component {
//   state = {
//     value: '',
//     description: '',
//     currency: 'USD',
//     paymentMethod: 'Dinheiro',
//     tag: 'Alimentação',
//   };

//   componentDidMount() {
//     const { fetchData } = this.props;
//     fetchData();
//   }

//   handleChange = ({ target }) => {
//     const { value, name } = target;
//     this.state({
//       [name]: value,
//     });
//   };

//   render() {
//     const { value, description, currency, paymentMethod, tag } = this.state;
//     // const { currencies } = this.props;
//     return (
//       <div>
//         <div>WalletForm</div>
//         <fieldset>
//           <label htmlFor="value">
//             <input
//               type="value"
//               name="value"
//               value={ value }
//               data-testid="value-input"
//               onChange={ this.handleChange }
//             />
//             Valor:
//           </label>
//           <br />
//           <br />
//           <label htmlFor="description">
//             <input
//               type="description"
//               name="description"
//               value={ description }
//               data-testid="description-input"
//               onChange={ this.handleChange }
//             />
//             Descrição:
//           </label>
//           <br />
//           <br />
//           <label htmlFor="currency">
//             <select
//               type="currency"
//               name="currency"
//               value={ currency }
//               onChange={ this.handleChange }
//               data-testid="currency-input"
//             >
//               {
//                 // currencies.map((corrente, direction) => (
//                 //   <option key={ direction }>{ corrente }</option>
//                 // ))
//               }
//             </select>
//             Moeda:
//           </label>
//           <br />
//           <br />
//           <label htmlFor="paymentMethod">
//             <select
//               name="paymentMethod"
//               type="paymentMethod"
//               value={ paymentMethod }
//               onChange={ this.handleChange }
//               data-testid="method-input"
//             >
//               <option>Dineheiro</option>
//               <option>Cartão de débito</option>
//               <option>Cartão de crédito</option>

//             </select>
//             Método de pagamento:
//           </label>
//           <br />
//           <br />
//           <label htmlFor="tag">
//             <select
//               name="tag"
//               type="tag"
//               value={ tag }
//               onChange={ this.handleChange }
//               data-testid="tag-input"
//             >
//               <option>Alimentação</option>
//               <option>Saude</option>
//               <option>Lazer</option>
//               <option>Trabalho</option>
//               <option>Transporte</option>
//             </select>
//             Tag:
//           </label>
//         </fieldset>
//       </div>
//     );
//   }
// }
// function mapStateToProps(state) {
//   return {
//     currencies: state.wallet.currencies,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchData: () => dispatch(fetchReqWallet()),
//   };
// }

// WalletForm.propTypes = {
//   fetchData: PropTypes.func.isRequired,
//   currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
