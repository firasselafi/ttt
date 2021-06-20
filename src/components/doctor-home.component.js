import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import { FileAddOutlined  , LogoutOutlined, UserAddOutlined, HomeOutlined  } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Appointments from './doctorComponents/Appointments.component';
import Ordonnance from './doctorComponents/Ordonnance.component';
import AssignPrescription from './doctorComponents/AssignPrescription.component';
import { AuthGuard } from './authGuard';
const { Header, Content, Sider } = Layout;

const Doctor = () => {
  return (
    <React.StrictMode>
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
            <Menu.Item key="1" icon={<HomeOutlined />}>
            <span>Home</span>
            <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />} >
            <span>Appointments</span>
            <Link to="/doctors/appointments" />
            </Menu.Item>
            <Menu.Item key="3" icon={<FileAddOutlined />}>
            <span>Asgin Prescription</span>
            <Link to="/doctors/prescriptionsAssign" />
            </Menu.Item>
            <Menu.Item key="4" 
            icon={<LogoutOutlined />}
            onClick={() => {localStorage.clear(); console.log('local storage deleted!')}}
            >
            <span>Log out</span>
            <Link to="" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />

          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 700 }}>

            <Route path="/doctors/appointments" exact component={Appointments}/>
            <Route path="/doctors/prescriptionsAssign" component={AssignPrescription}/>
          {/*<Route path="/patients/edit" exact component={EditPatient}/>
          <Route path="/patients/delete" exact component={DeletePatient}/>*/}

            </div>  
          </Content>
          
        </Layout>
      </Layout>

     
      </React.StrictMode>
  )
}

export default AuthGuard(Doctor);
