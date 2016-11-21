import ActionTypes from '../actions/actionTypes/ethereumActionTypes';

const primaryAccount = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.ETHEREUM_SET_PRIMARY_ACCOUNT:
      return action.payload.account;
    default:
      return state;
  }
};

export default primaryAccount;
