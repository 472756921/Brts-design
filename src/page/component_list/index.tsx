import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const Styles = require('./index.css');

const login = (props: any) => {
	console.log('props :>> ', props);
	return (
		<Layout className={Styles.componentsLayout}>
			<Sider theme="light">
				<Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
					<Menu.Item key="1">Select 选择器</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header className={Styles.header}>123</Header>
				<Content>
					{props?.children?.map((it: any, i: number) => (
						<Route
							component={it.component}
							exact={it.exact}
							key={i}
							path={it.path}
						/>
					))}
					123
				</Content>
				<Footer className={Styles.footer}>Brts-Design</Footer>
			</Layout>
		</Layout>
	);
};

export default login;
