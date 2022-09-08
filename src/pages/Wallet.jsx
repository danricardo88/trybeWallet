import React, { Component } from 'react';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';
import Table from '../components/Table';

export default class Wallet extends Component {
  render() {
    return (
      // <div>TrybeWallet</div>
      <div>
        <Header />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

//  Wallet;
