import React, { Component, PropTypes } from 'react';
import Remove from '../../components/icons/Remove';
import Trash from '../../components/icons/Trash';

export default class MessageComposer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      body: '',
      from: '',
      to: '',
      subject: '',
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  handleBodyChange({ target: { value } }) {
    this.setState({
      body: value
    });
  }

  handleCloseClick(e) {
    e.preventDefault();
    this.props.composingMessage(false);
  }

  handleFromChange({ target: { value } }) {
    this.setState({
      from: value
    });
  }

  handleSubjectChange({ target: { value } }) {
    this.setState({
      subject: value
    });
  }

  handleToChange({ target: { value } }) {
    this.setState({
      to: value
    });
  }

  render() {
    const { body, from, subject, to } = this.state;
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
                value={to}
              />
            </label>
            <label htmlFor="from">
              From
              <input
                name="from"
                onChange={this.handleFromChange}
                type="text"
                value={from}
              />
            </label>
            <div className="message-subject">
              <input
                name="subject"
                onChange={this.handleSubjectChange}
                placeholder="Subject"
                type="text"
                value={subject}
              />
            </div>
            <div className="message-body">
              <textarea
                name="body"
                onChange={this.handleBodyChange}
                type="text"
                value={body}
              />
            </div>
          </form>
        </div>
        <div className="message-composer-footer">
          <button className="message-composer-send-button">
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
  composingMessage: PropTypes.func.isRequired,
};
