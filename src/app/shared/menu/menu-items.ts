export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/home',
    title: 'Home',
    type: 'link',
    icontype: ''
  },
  {
    path: '/admin/management',
    title: 'About Us',
    type: 'sub',
    icontype: '',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'history', title: 'History', type: 'link' },
      { path: 'role', title: 'Roles', type: 'link' },
    ]
  },
  {
    path: '/admin/statistic',
    title: 'Statistics',
    type: 'link',
    icontype: ''
  },
  {
    path: '/admin/publication',
    title: 'Publication',
    type: 'link',
    icontype: ''
  },
  
  {
    path: '/admin/contact',
    title: 'Contact Us',
    type: 'link',
    icontype: ''
  }
];
  /*{
    path: '/admin/management',
    title: 'User Management',
    type: 'sub',
    icontype: '',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'user', title: 'User', type: 'link' },
      { path: 'audit-trails', title: 'Audit Trail', type: 'link' },
    ]
  }
];*/

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: ''
  },
  {
    path: '/admin/report',
    title: 'Survey Management',
    type: 'link',
    icontype: ''
  },
  {
    path: '/user/provider',
    title: 'Provider Management',
    type: 'link',
    icontype: ''
  },
  {
    path: '/admin/management',
    title: 'User Management',
    type: 'sub',
    icontype: '',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },
/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];