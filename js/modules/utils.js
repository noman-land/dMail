const getNewOrExistingPrimaryAccounts = () => {
  return JSON.parse(localStorage.getItem('primaryAccounts')) || {};
};

export const savePrimaryAccount = (networkId, account) => {
  let storedPrimaryAccounts = getNewOrExistingPrimaryAccounts();

  storedPrimaryAccounts[networkId] = account;

  localStorage.setItem('primaryAccounts', JSON.stringify(storedPrimaryAccounts));
  return account;
};

export const getSavedPrimaryAccount = (networkId) => {
  let storedPrimaryAccounts = getNewOrExistingPrimaryAccounts();

  return storedPrimaryAccounts[networkId];
};
