import React, { Component, PropTypes } from 'react';
import Remove from '../../components/icons/Remove';
import Trash from '../../components/icons/Trash';

export default class MessageComposer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  handleBodyChange({ target: { value } }) {
    this.props.setDraftBody(value);
  }

  handleCloseClick(e) {
    e.preventDefault();
    this.props.composingMessage(false);
  }

  handleFromChange({ target: { value } }) {
  }

  handleSend() {
    const {
      activeMailbox,
      composingMessage,
      draftBody,
      draftSubject,
      primaryAccount,
      sendMessage,
      setDraftBody,
      setDraftSubject,
    } = this.props;

    sendMessage({
      body: draftBody,
      from: primaryAccount,
      subject: draftSubject,
      to: activeMailbox,
    }, 'password');

    composingMessage(false);
    setDraftBody('');
    setDraftSubject('');
  }

  handleSubjectChange({ target: { value } }) {
    this.props.setDraftSubject(value);
  }

  handleToChange({ target: { value } }) {
  }

  render() {
    const { activeMailbox, draftBody, draftSubject, primaryAccount } = this.props;
    return (
      <div className="message-composer">
        <div className="message-composer-header">
          <span>
            New Message
          </span>
          <a className="close" onClick={this.handleCloseClick}>
            <Remove color="#FFFFFF" />
          </a>
        </div>
        <div className="message-composer-body">
          <form>
            <label htmlFor="to">
              To
              <input
                name="to"
                onChange={this.handleToChange}
                type="text"
                value={activeMailbox}
              />
            </label>
            <label htmlFor="from">
              From
              <input
                name="from"
                onChange={this.handleFromChange}
                type="text"
                value={primaryAccount}
              />
            </label>
            <div className="message-subject">
              <input
                name="subject"
                onChange={this.handleSubjectChange}
                placeholder="Subject"
                type="text"
                value={draftSubject}
              />
            </div>
            <div className="message-body">
              <textarea
                name="body"
                onChange={this.handleBodyChange}
                type="text"
                value={draftBody}
              />
            </div>
          </form>
        </div>
        <div className="message-composer-footer">
          <button
            className="message-composer-send-button"
            onClick={this.handleSend}
          >
            Send
          </button>
          <a className="close" onClick={this.handleCloseClick}>
            <Trash />
          </a>
        </div>
      </div>
    );
  }
}

MessageComposer.propTypes = {
  activeMailbox: PropTypes.string,
  draftBody: PropTypes.string,
  draftSubject: PropTypes.string,
  composingMessage: PropTypes.func.isRequired,
  primaryAccount: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
  setDraftBody: PropTypes.func.isRequired,
  setDraftSubject: PropTypes.func.isRequired,
};
