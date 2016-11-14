import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class EthereumSettings extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { accounts } = this.props;

    return (
      <div className="flex-column align-content-stretch p-5">
        <h1>
          Ethereum Settings!
        </h1>
        {accounts && (
          <div>
            <h3>
              You have {accounts.length} Ethereum addresses
            </h3>
            <ul className="list-style-none">
              {accounts.map(account => (
                <li key={account}>
                  {account}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

EthereumSettings.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.string),
};

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
  })
)(EthereumSettings);
