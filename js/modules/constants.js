export const GETH_RPC_PATH = 'http://192.168.99.100:8545';

export const DMAIL_ABI = [{"constant":false,"inputs":[],"name":"clearInbox","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getUnreadCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getArchiveAddress","outputs":[{"name":"archiveAddress","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newArchiveAddress","type":"string"}],"name":"updateArchiveAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"getMail","outputs":[{"name":"sender","type":"address"},{"name":"messageHash","type":"string"},{"name":"timestamp","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"messageHash","type":"string"}],"name":"sendMessage","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"messageHash","type":"string"}],"name":"ReceivedMail","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"newArchiveAddress","type":"string"}],"name":"ArchiveAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"}],"name":"NewMailArchived","type":"event"}];

export const DMAIL_ADDRESS = '0xbf3d42aa7c5b7fe45367ebfcefc7b7f5d160ce00';

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
