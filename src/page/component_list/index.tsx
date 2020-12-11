import React from 'react';
import { Layout, Menu } from 'antd';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import LadderPrice from '../../components/LadderPrice/LadderPrice';

const { Header, Content, Footer, Sider } = Layout;

const Styles = require('./index.css');

const login: React.FC = () => {
	let { path, url } = useRouteMatch();

	return (
		<Layout className={Styles.componentsLayout}>
			<Sider theme="light">
				<div className={Styles.logo}>Brts-Design</div>
				<Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
					<Menu.Item key="1">
						<Link to={`${url}/ladderprice`}>LadderPrice 阶梯计价器</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header className={Styles.header}>组件库</Header>
				<Content className={Styles.componentsContent}>
					<Switch>
						<Route
							exact
							key="Select"
							path={`${path}/ladderprice`}
							component={LadderPrice}
						/>
					</Switch>
				</Content>
				<Footer className={Styles.footer}>Brts-Design</Footer>
			</Layout>
		</Layout>
	);
};

export default login;
