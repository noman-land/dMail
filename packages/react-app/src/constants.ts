export const DMAIL_ADDRESS_MAINNET = '0x0' as const;
export const DMAIL_ADDRESS_GOERLI =
  '0x3360Bc5a02Ade2FE4B082181C082618B52456Ce7' as const;

type AppRoute = 'inbox' | 'drafts' | 'settings';
type RouteKey = 'INBOX' | 'DRAFTS' | 'SETTINGS';
type Routes = {
  [K in RouteKey]: AppRoute;
};

export const routes: Routes = {
  INBOX: 'inbox',
  DRAFTS: 'drafts',
  SETTINGS: 'settings',
};

type SidebarLink = {
  route: AppRoute;
  text: string;
};

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    route: routes.INBOX,
    text: 'Inbox',
  },
  {
    route: routes.DRAFTS,
    text: 'Drafts',
  },
];
