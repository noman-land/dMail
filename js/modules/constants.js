export const GETH_RPC_PATH = 'http://192.168.99.100:8545';
export const DMAIL_ADDRESS = '0x7851a6b537308e6af7391dcf9e473b6e0eb017c4';

export const routes = {
  INBOX: 'inbox',
  DRAFTS: 'drafts',
  SETTINGS: 'settings',
};

export const SIDEBAR_LINKS = [
  {
    route: routes.INBOX,
    text: 'Inbox',
  },
  {
    route: routes.DRAFTS,
    text: 'Drafts',
  }
];
