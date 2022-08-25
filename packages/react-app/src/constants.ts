export const DEFAULT_HOSTNAME = 'localhost';
export const DEFAULT_GETH_RPC_PATH = `http://${DEFAULT_HOSTNAME}:8545`;

export const DMAIL_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'newArchiveAddress',
        type: 'string',
      },
    ],
    name: 'ArchiveAddressUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'clearInbox',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'NewMailArchived',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'messageHash',
        type: 'string',
      },
    ],
    name: 'ReceivedMail',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'messageHash',
        type: 'string',
      },
    ],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'newArchiveAddress',
        type: 'string',
      },
    ],
    name: 'updateArchiveAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getArchiveAddress',
    outputs: [
      {
        internalType: 'string',
        name: 'archiveAddress',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getMail',
    outputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'messageHash',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUnreadCount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'unreadCount',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const DMAIL_ADDRESS_GOERLI =
  '0x3360Bc5a02Ade2FE4B082181C082618B52456Ce7' as const;
export const DMAIL_ADDRESS_LOCAL =
  '0x116166d4033d46b139e651ff848109a83be3b0d7' as const;

export const routes = {
  INBOX: 'inbox',
  DRAFTS: 'drafts',
  SETTINGS: 'settings',
} as const;

export const SIDEBAR_LINKS = [
  {
    route: routes.INBOX,
    text: 'Inbox',
  },
  {
    route: routes.DRAFTS,
    text: 'Drafts',
  },
] as const;
