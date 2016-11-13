import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class IPFSSettings extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>
          IPFS Settings!
        </h1>
      </div>
    );
  }
}

IPFSSettings.propTypes = {
  ipfs: PropTypes.object.isRequired
};

export default connect(
  () => {
    return {
      ipfs: window.ipfs
    };
  },
)(IPFSSettings);
