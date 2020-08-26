import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Routes from './route';
import './gloab.css';
render(
	<BrowserRouter>
		<Suspense fallback={<div>loading...</div>}>
			<Switch>
				{Routes?.map((it, i) => (
					<Route
						exact={it.exact}
						key={i}
						path={it.path}
						render={(props: any) => (
							<it.component {...props} routes={it.children} />
						)}
					/>
				))}
			</Switch>
		</Suspense>
	</BrowserRouter>,
	document.getElementById('root')
);
