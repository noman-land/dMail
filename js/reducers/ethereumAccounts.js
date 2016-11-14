import ActionTypes from '../actions/actionTypes/ethereumActionTypes';

const ethereumAccounts = (
  state = null,
  action
) => {
  console.log(action);


  switch (action.type) {
    case ActionTypes.ETHEREUM_FETCH_ACCOUNTS_SUCCESS:
      return action.payload.accounts;
    default:
      return state;
  }
};

export default ethereumAccounts;
