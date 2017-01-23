const getExistingOrNewPrimaryAccounts = () => {
  let existingOrEmptyPrimaryAccounts = JSON.parse(localStorage.getItem('primaryAccounts'));
  return existingOrEmptyPrimaryAccounts || {};
};

export const savePrimaryAccount = (networkId, account) => {
  let storedPrimaryAccounts = getExistingOrNewPrimaryAccounts();

  storedPrimaryAccounts[networkId] = account;

  localStorage.setItem('primaryAccounts', JSON.stringify(storedPrimaryAccounts));
  return account;
};

export const getSavedPrimaryAccount = (networkId) => {
  let storedPrimaryAccounts = getExistingOrNewPrimaryAccounts();

  return storedPrimaryAccounts[networkId];
};
