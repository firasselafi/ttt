import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './index.css';
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import CreatePatient from "./components/create-patient.component";
import Doctor from "./components/doctor.component";
const { Header, Content, Footer, Sider } = Layout;


ReactDOM.render(
  
<React.StrictMode>
<Router>
<Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
        <span>create</span>
        <Link to="/create" />
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />} >
        <span>home</span>
        <Link to="/" />
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

          <Route path="/create" exact component={CreatePatient}/>
          <Route path="/" exact component={Doctor}/>

        </div>  
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  </Router>
 
  </React.StrictMode>,
  document.getElementById('root'),


);