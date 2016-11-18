import React, { PropTypes, Component } from 'react';

class EthereumSettings extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userAddedMailbox: '',
    };

    props.ethereumGetAccounts();

    this.handleActiveAccountChange = this.handleActiveAccountChange.bind(this);
    this.handleAddMailboxSubmit = this.handleAddMailboxSubmit.bind(this);
    this.handleCancelAddingMailboxClick = this.handleCancelAddingMailboxClick.bind(this);
    this.handleChangeMailboxClick = this.handleChangeMailboxClick.bind(this);
    this.handleCreateMailboxClick = this.handleCreateMailboxClick.bind(this);
    this.handleUserAddedMailboxChange = this.handleUserAddedMailboxChange.bind(this);
  }

  handleActiveAccountChange({ target: { value } }) {
    this.props.setActiveAccount(value);
  }

  handleAddMailboxSubmit(e) {
    const { setAddingMailbox, setMailbox } = this.props;
    const { userAddedMailbox } = this.state;

    e.preventDefault();

    setMailbox(userAddedMailbox);
    setAddingMailbox(false);

    this.setState({
      userAddedMailbox: '',
    });
  }

  handleCancelAddingMailboxClick(e) {
    e.preventDefault();
    this.props.setAddingMailbox(false);
  }

  handleChangeMailboxClick(e) {
    e.preventDefault();
    this.props.setAddingMailbox(true);
  }

  handleCreateMailboxClick(e) {
    // Fire an action.
    return e;
  }

  handleUserAddedMailboxChange({ target: { value } }) {
    this.setState({
      userAddedMailbox: value,
    });
  }

  render() {
    const {
      accounts,
      activeAccount,
      activeMailbox,
      addingMailbox,
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

                {activeMailbox && !addingMailbox ? (
                  <div>
                    <p>
                      You are currently using mailbox:
                    </p>
                    <p className="h5 m-4-y">
                      {activeMailbox}
                    </p>
                    <a href="" onClick={this.handleChangeMailboxClick}>
                      Change mailbox
                    </a>
                  </div>
                ) : (
                  <div>
                    <div>
                      {!activeMailbox && (
                        <h4 className="m-4-y">
                          You do not have a mailbox.
                        </h4>
                      )}
                      <button className="button primary m-2-t">
                        Create Mailbox
                      </button>
                    </div>
                    <div className="m-6-t">
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
                          {activeMailbox && (
                            <a
                              href=""
                              className="align-self-end m-2-l"
                              onClick={this.handleCancelAddingMailboxClick}
                            >
                              cancel
                            </a>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                )}
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
  activeAccount: PropTypes.string,
  addingMailbox: PropTypes.bool.isRequired,
  createMailbox: PropTypes.func.isRequired,
  ethereumGetAccounts: PropTypes.func.isRequired,
  activeMailbox: PropTypes.string,
  setMailbox: PropTypes.func.isRequired,
  setActiveAccount: PropTypes.func.isRequired,
  setAddingMailbox: PropTypes.func.isRequired,
};

export default EthereumSettings;
