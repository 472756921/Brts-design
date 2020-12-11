import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './gloab.css';

import NoPage from './page/404';
render(
	<BrowserRouter>
		<Suspense fallback={<div>loading...</div>}>
			<Switch>
				<Route exact path="/" component={lazy(() => import('./page/home'))} />
				<Route
					path="/components"
					component={lazy(() => import('./page/component_list'))}
				/>
				<Route>
					<NoPage />
				</Route>
			</Switch>
		</Suspense>
	</BrowserRouter>,
	document.getElementById('root')
);
