import React, { lazy, Suspense } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const Styles = require('./index.less');

const ComponentsIndex = (props: any) => {
  return (
    <Layout className={Styles.componentsLayout}>
      <Sider theme="light">
        <div className={Styles.loginTitle}>
          <h2>BTRS DESIGN</h2>
        </div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          {props?.routes?.map((it: any, i: number) => (
            <Menu.Item key={i + '_cpt_menu'}>
              <Link to={it?.path}>{it?.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className={Styles.header}>123</Header>
        <Content>
          {props?.routes?.map((it: any, i: number) => (
            <Route
              key={i + '_cpt_router'}
              exact
              path={it?.path}
              component={it?.component}
            />
          ))}
        </Content>
        <Footer className={Styles.footer}>Brts-Design</Footer>
      </Layout>
    </Layout>
  );
};

export default ComponentsIndex;
