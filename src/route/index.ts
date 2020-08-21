import { lazy } from 'react';

const routes = [
	{
		'path': '/',
		'component': lazy(() => import('../page/home')),
		'exact': true
	},
	{
		'path': '/components',
		'component': lazy(() => import('../page/component_list')),
		'exact': false,
		'children': [
			{
				'path': '/components/select',
				'component': lazy(() => import('../page/component_list/cps/select'))
			}
		]
	}
];

export default routes;
