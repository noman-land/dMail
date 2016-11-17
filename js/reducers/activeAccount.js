import ActionTypes from '../actions/actionTypes/ethereumActionTypes';

const activeAccount = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.ETHEREUM_SET_ACTIVE_ACCOUNT:
      return action.payload.account;
    default:
      return state;
  }
};

export default activeAccount;
