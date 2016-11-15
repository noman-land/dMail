import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { ethereumGetAccounts } from '../actions/asyncActions/ethereumAsyncActions';
import { addMailbox } from '../actions/mailboxActions';
import { setActiveAccount } from '../actions/ethereumActions';

class EthereumSettings extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userAddedMailbox: '',
    };

    props.ethereumGetAccounts();

    this.handleAddMailboxSubmit = this.handleAddMailboxSubmit.bind(this);
    this.handleActiveAccountChange = this.handleActiveAccountChange.bind(this);
    this.handleUserAddedMailboxChange = this.handleUserAddedMailboxChange.bind(this);
  }

  handleAddMailboxSubmit(e) {
    const { addMailbox } = this.props;
    const { userAddedMailbox } = this.state;
    e.preventDefault();

    addMailbox(userAddedMailbox);
  }

  handleActiveAccountChange({ target: { value } }) {
    this.props.setActiveAccount(value);
  }

  handleUserAddedMailboxChange({ target: { value } }) {
    this.setState({
      userAddedMailbox: value
    });
  }

  render() {
    const {
      accounts,
      accountsLength,
      mailboxes,
      mailboxesLength,
    } = this.props;

    const { userAddedMailbox } = this.state;

    return (
      <div className="flex-column flex-grow-1 p-5">
        <h1 className="h2 text-center m-10-b">
          Ethereum Settings
        </h1>
        <div className="flex-grow-1">
          <div className="flex-column align-items-center list-style-none p-0">
            <div style={{minWidth: 400, maxWidth: 1200}}>
              <div>
                <h3 className="m-3-b">
                  Account:
                </h3>
                <h4 className="m-2-b">
                  You have {accountsLength} Ethereum addresses
                </h4>

                {accountsLength ? (
                  <div>
                    <p className="m-1-b">
                      Which one would you like to use?
                    </p>
                    <select onChange={this.handleActiveAccountChange}>
                      {accounts.map(account => (
                        <option key={account} value={account}>
                          {account}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <p className="m-5-b">
                      Would you like to create one now?
                    </p>
                    <a className="button">
                      Create Ethereum wallet
                    </a>
                  </div>
                )}
              </div>
              <hr className="m-10-y" />
              <div>
                <h3 className="m-3-b">
                  Mailbox:
                </h3>
                <h4 className="m-2-b">
                  You have {mailboxesLength} mailboxes
                </h4>

                {mailboxesLength ? (
                  <div>
                    <p className="m-1-b">
                      Which one would you like to use?
                    </p>
                    <select>
                      {mailboxes.map(mailbox => (
                        <option key={mailbox} value={mailbox}>
                          {mailbox}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <p className="m-1-b">
                      Would you like to deploy one now?
                    </p>
                    <button className="button">
                      Create dMailbox
                    </button>
                  </div>
                )}
                <p className="m-3-t m-1-b">
                  Already have your own? Enter its address here:
                </p>
                <div className="flex align-items-stretch">
                  <form onSubmit={this.handleAddMailboxSubmit} className="flex flex-grow-1">
                    <input
                      className="flex-grow-1 p-1"
                      onChange={this.handleUserAddedMailboxChange}
                      type="text"
                      value={userAddedMailbox}
                    />
                    <button type="submit">
                      Add
                    </button>
                  </form>
                </div>
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
  accounts: PropTypes.arrayOf(PropTypes.string).isRequired,
  accountsLength: PropTypes.number.isRequired,
  addMailbox: PropTypes.func.isRequired,
  mailboxes: PropTypes.arrayOf(PropTypes.string).isRequired,
  mailboxesLength: PropTypes.number.isRequired,
  ethereumGetAccounts: PropTypes.func.isRequired,
  setActiveAccount: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
    accountsLength: state.ethereumAccounts.length,
    mailboxes: state.mailboxes,
    mailboxesLength: state.mailboxes.length,
  }),
  dispatch => ({
    ethereumGetAccounts() {
      dispatch(ethereumGetAccounts());
    },
    setActiveAccount(account) {
      dispatch(setActiveAccount(account));
    },
    addMailbox(mailbox) {
      dispatch(addMailbox(mailbox));
    },
  })
)(EthereumSettings);
