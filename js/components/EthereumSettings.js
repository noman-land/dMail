import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { ethereumGetAccounts } from '../actions/asyncActions/ethereumAsyncActions';

class EthereumSettings extends Component {
  constructor(props, context) {
    super(props, context);
    props.ethereumGetAccounts();
  }

  render() {
    const { accounts } = this.props;

    return (
      <div className="flex-column flex-grow-1 p-5">
        <h1 className="h2 text-center m-10-b">
          Ethereum Settings!
        </h1>
        <div className="flex-grow-1">
          <div className="flex-column align-items-center list-style-none p-0">
            <div style={{minWidth: 400, maxWidth: 1200}}>
              <div>
                <h3 className="m-3-b">
                  Account:
                </h3>
                <h4 className="m-2-b">
                  You have {accounts.length} Ethereum addresses
                </h4>
                <p>
                  Which one would you like to use?
                </p>
                {accounts.length && (
                  <select>
                    {accounts.map(account => (
                      <option key={account} value={account}>
                        {account}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <hr className="m-10-y" />
              <div>
                <h3 className="m-3-b">
                  Mailbox:
                </h3>
                <h4 className="m-2-b">
                  You have {accounts.length} mailboxes
                </h4>
                <p>
                  Which one would you like to use?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-space-between">
          <a className="button">
            {'<< Prev'}
          </a>
          <a className="button">
            {'Next >>'}
          </a>
        </div>
      </div>
    );
  }
}

EthereumSettings.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.string),
  ethereumGetAccounts: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
  }),
  dispatch => ({
    ethereumGetAccounts: () => {
      dispatch(ethereumGetAccounts());
    }
  })
)(EthereumSettings);
