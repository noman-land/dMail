import React, { PropTypes, Component } from 'react';

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
    const { setAddingMailbox, setMailbox } = this.props;
    const { userAddedMailbox } = this.state;

    e.preventDefault();

    setMailbox(userAddedMailbox);
    setAddingMailbox(false);
  }

  handleActiveAccountChange({ target: { value } }) {
    this.props.setActiveAccount(value);
  }

  handleUserAddedMailboxChange({ target: { value } }) {
    this.setState({
      userAddedMailbox: value
    });
  }

  handleCreateMailboxClick() {

  }

  render() {
    const {
      accounts,
      addingMailbox,
      mailbox,
    } = this.props;

    const { userAddedMailbox } = this.state;

    const accountsLength = accounts.length;

    return (
      <div className="flex-column flex-grow-1 p-5">
        <h1 className="h2 text-center m-10-b">
          Ethereum Settings
        </h1>
        <div className="flex-grow-1">
          <div className="flex-column align-items-center list-style-none p-0">
            <div style={{minWidth: 450, maxWidth: 1200}}>
              <div>
                <h3>
                  Identity:
                </h3>
                <h4 className="m-4-y">
                  You have {accountsLength || 'no'} identit{accountsLength - 1 ? 'ies' : 'y'}
                </h4>

                {accountsLength ? (
                  <div>
                    <p className="m-1-b">
                      Please choose a primary identity
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
                    <button className="button primary m-2-t">
                      Create Identity
                    </button>
                  </div>
                )}
              </div>
              <hr className="m-10-y" />
              <div>
                <h3 className="m-3-b">
                  Mailbox:
                </h3>

                {mailbox ? (
                  <div>
                    <p>
                      You are currently using mailbox:
                    </p>
                    <p className="h5 m-4-y">
                      {mailbox}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h4 className="m-2-b">
                      You do not have a mailbox.
                    </h4>
                    <p>
                      Would you like to create one now?
                    </p>
                    <button className="button primary m-6-b m-2-t">
                      Create Mailbox
                    </button>
                  </div>
                )}
                <div>
                  <p>
                    Already have your own? Enter its address here:
                  </p>
                  <p className="text-small text-grey m-1-b">
                    Please make sure it adheres to the <a href="#">dMail API spec</a>
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
  addingMailbox: PropTypes.bool.isRequired,
  ethereumGetAccounts: PropTypes.func.isRequired,
  mailbox: PropTypes.string,
  setMailbox: PropTypes.func.isRequired,
  setActiveAccount: PropTypes.func.isRequired,
  setAddingMailbox: PropTypes.func.isRequired,
};

export default EthereumSettings;
