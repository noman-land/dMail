import React, { PropTypes, Component } from 'react';

export default class IPFSSettings extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="h1">
        IPFS Settings!
      </div>
    );
  }
}

IPFSSettings.propTypes = {
  ipfs: PropTypes.object.isRequired
};
