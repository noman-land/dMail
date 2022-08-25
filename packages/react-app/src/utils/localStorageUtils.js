const getNewOrExistingPrimaryAccounts = () =>
  JSON.parse(localStorage.getItem('primaryAccounts')) || {};

export const savePrimaryAccount = (networkId, account) => {
  const storedPrimaryAccounts = getNewOrExistingPrimaryAccounts();

  storedPrimaryAccounts[networkId] = account;

  localStorage.setItem(
    'primaryAccounts',
    JSON.stringify(storedPrimaryAccounts)
  );
  return account;
};

export const getSavedPrimaryAccount = networkId =>
  getNewOrExistingPrimaryAccounts()[networkId];
