import React, { Component, PropTypes } from 'react';
import AccountRow from './AccountRow';

import { getCoinbase, isMining } from '../../../modules/ethereumUtils';

export default class EthereumSettings extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      coinbase: null,
    };

    this.handleCreateIdentityClick = this.handleCreateIdentityClick.bind(this);
  }

  componentDidMount() {
    getCoinbase().then(coinbase => {
      this.setState({
        coinbase
      });
    });
  }

  handleCreateIdentityClick() {
    this.props.ethereumCreateAccount();
  }

  render() {
    const {
      accounts,
      getMessages,
      primaryAccount,
      setPrimaryAccount,
    } = this.props;

    const { coinbase } = this.state;

    const accountsLength = accounts.length;
    return (
      <div>
        <h3>
          Identity:
        </h3>
        <h4 className="m-4-y">
          You have {accountsLength || 'no'} identit{accountsLength - 1 ? 'ies' : 'y'}
        </h4>

        {accountsLength && (
          <div className="m-4-b">
            <p className="m-1-b">
              You can change your primary identity here
            </p>
            <table className="account-table">
              <thead>
                <tr>
                  <th>
                    Address
                  </th>
                  <th className="balance">
                    Ether
                  </th>
                  <th className="primary">
                    Primary
                  </th>
                </tr>
              </thead>
              <tbody>
                {accounts.map(account => {
                  const isCoinbase = coinbase === account;
                  return (
                    <AccountRow
                      account={account}
                      getMessages={getMessages}
                      isCoinbase={isCoinbase}
                      isPrimary={account === primaryAccount}
                      isMining={isCoinbase && isMining()}
                      key={account}
                      setPrimaryAccount={setPrimaryAccount}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <div>
          <button className="button primary m-2-t" onClick={this.handleCreateIdentityClick}>
            Create Identity
          </button>
        </div>
      </div>
    );
  }
}

EthereumSettings.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.string).isRequired,
  getMessages: PropTypes.func.isRequired,
  ethereumCreateAccount: PropTypes.func.isRequired,
  primaryAccount: PropTypes.string,
  setPrimaryAccount: PropTypes.func.isRequired,
};
