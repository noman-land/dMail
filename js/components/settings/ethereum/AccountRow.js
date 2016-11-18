import React, { Component, PropTypes } from 'react';

const AccountRow = ({
  account,
  isPrimary,
  onSetPrimary,
}) => {
  return (
    <li value={account} className="flex justify-space-between">
      <span className={isPrimary && 'bold'}>
        {account}
      </span>
      <span className="m-5-l">
        {!isPrimary && (
          <a href="#" onClick={onSetPrimary(account)}>
            make primary
          </a>
        )}
      </span>
    </li>
  );
};

AccountRow.propTypes = {
  account: PropTypes.string.isRequired
};

export default AccountRow;
