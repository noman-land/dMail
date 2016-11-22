import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import LoadingSpinner from '../../icons/LoadingSpinner';

export default class MailboxSettings extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      userAddedMailbox: '',
    };

    this.handleAddMailboxSubmit = this.handleAddMailboxSubmit.bind(this);
    this.handleCancelAddingMailboxClick = this.handleCancelAddingMailboxClick.bind(this);
    this.handleChangeMailboxClick = this.handleChangeMailboxClick.bind(this);
    this.handleCreateMailboxClick = this.handleCreateMailboxClick.bind(this);
    this.handleUserAddedMailboxChange = this.handleUserAddedMailboxChange.bind(this);
  }

  handleAddMailboxSubmit(e) {
    const { setAddingMailbox, setMailbox } = this.props;
    const { userAddedMailbox } = this.state;

    e.preventDefault();

    setMailbox(userAddedMailbox);
    localStorage.setItem('mailbox', userAddedMailbox);
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
    const {
      createMailbox,
      creatingMailbox,
      primaryAccount,
      setAddingMailbox,
    } = this.props;

    e.preventDefault();

    if (!creatingMailbox) {
      setAddingMailbox(false);
      createMailbox(primaryAccount, 'password');
    }
  }

  handleUserAddedMailboxChange({ target: { value } }) {
    this.setState({
      userAddedMailbox: value,
    });
  }

  render() {
    const {
      activeMailbox,
      addingMailbox,
      creatingMailbox,
    } = this.props;

    const { userAddedMailbox } = this.state;

    return (
      <div>
        <h3 className="m-3-b">
          Mailbox:
        </h3>

        {activeMailbox && !addingMailbox && !creatingMailbox ? (
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
                <h4 className="m-4-t m-6-b">
                  You do not have a mailbox.
                </h4>
              )}
              <div className="flex align-items-baseline">
                <button
                  className={classNames(
                    'flex', 'position-relative', 'justify-space-between',
                    'align-items-center', 'button', 'primary', 'm-2-r',
                    'display-inline', 'outline-none',
                    {
                      'cursor-default': creatingMailbox,
                      'cursor-pointer': !creatingMailbox
                    }
                  )}
                  disabled={creatingMailbox}
                  onClick={this.handleCreateMailboxClick}
                >
                  <span className={classNames('m-2-r', {'opacity-5': creatingMailbox})}>
                    {creatingMailbox ? (
                      'Creating mailbox'
                    ) : (
                      'Create new mailbox'
                    )}
                  </span>
                  <LoadingSpinner isLoading={creatingMailbox} />
                </button>
                {creatingMailbox && (
                  <span>
                    This should take about 15 seconds
                  </span>
                )}
              </div>
            </div>
            {!creatingMailbox && (
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
                        className="align-self-center m-2-l"
                        onClick={this.handleCancelAddingMailboxClick}
                      >
                        cancel
                      </a>
                    )}
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

MailboxSettings.propTypes = {
  activeMailbox: PropTypes.string,
  addingMailbox: PropTypes.bool,
  createMailbox: PropTypes.func.isRequired,
  creatingMailbox: PropTypes.bool.isRequired,
  primaryAccount: PropTypes.string,
  setAddingMailbox: PropTypes.func.isRequired,
  setMailbox: PropTypes.func.isRequired,
};
