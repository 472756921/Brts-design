import { lazy } from 'react';
import SelectPage from '../page/component_list/cps/select';

const routes = [
  {
    path: '/',
    component: lazy(() => import('../page/home')),
    name: '',
    exact: true,
  },
  {
    path: '/components',
    component: lazy(() => import('../page/component_list')),
    exact: false,
    name: '组件',
    children: [
      {
        path: '/components/select',
        name: 'Select 选择器',
        component: SelectPage,
      },
    ],
  },
];

export default routes;
