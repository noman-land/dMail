import React, { Component, PropTypes } from 'react';
import CheckMark from '../../../components/icons/CheckMark'
import Coins from '../../../components/icons/Coins'
import PickAxe from '../../../components/icons/PickAxe'
import { getBalance } from '../../../modules/ethereumUtils';

class AccountRow extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      balance: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { account } = this.props;

    this.setState({
      balance: getBalance(account)
    });

    this.interval = setInterval(() => {
      this.setState({
        balance: getBalance(account)
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick(account) {
    return (e) => {
      const { getMessages, setPrimaryAccount } = this.props;

      e.preventDefault();
      setPrimaryAccount(account);
      localStorage.setItem('primaryAccount', account);
      getMessages(account);
    };
  }

  render() {
    const { account, isCoinbase, isMining, isPrimary } = this.props;
    const { balance } = this.state;

    const shortAccount = account.substr(0, 6);

    return (
      <tr value={account}>
        <td className={isPrimary && 'bold'}>
          <span title={account}>
            {shortAccount}
          </span>
          {isCoinbase && (
            <Coins className="m-1-l"/>
          )}
          {isMining && (
            <PickAxe className="m-1-l" />
          )}
        </td>
        <td className="balance" title={`${balance / 1E4} Ether | ${balance} Wei`}>
          {(balance / 1E4).toFixed(2)}
        </td>
        <td className="m-5-l p-5-r primary">
          <CheckMark checked={isPrimary} />
          {!isPrimary && (
            <a href="#" onClick={this.handleClick(account)}>
              <CheckMark color="#EEE" />
            </a>
          )}
        </td>
      </tr>
    );
  }
}

AccountRow.propTypes = {
  account: PropTypes.string.isRequired,
  getMessages: PropTypes.func.isRequired,
  isCoinbase: PropTypes.bool.isRequired,
  isMining: PropTypes.bool.isRequired,
  isPrimary: PropTypes.bool,
  setPrimaryAccount: PropTypes.func.isRequired,
};

AccountRow.defaultProps = {
  isPrimary: false,
};

export default AccountRow;
