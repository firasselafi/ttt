import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../index.css';
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import { UserSwitchOutlined , UserDeleteOutlined, UserAddOutlined, HomeOutlined  } from '@ant-design/icons';
import CreatePatient from "../components/create-patient.component";
import Doctor from "./doctor-home.component";
import EditPatient from "../components/edit-patient.component";
import DeletePatient from "../components/delete-patient.component";
import PatientList from "../components/PatientList.component";
import { AuthGuard } from './authGuard';
const { Header, Content, Sider } = Layout;


class PatientHome extends Component {
  
  render() {
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
            <span>Add Patient</span>
            <Link to="/patients/create" />
            </Menu.Item>
            <Menu.Item key="3" icon={<UserDeleteOutlined />}>
            <span>Patient List</span>
            <Link to="/patients/list" />
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 700 }}>

          <Route path="/patients/create" exact component={CreatePatient}/>
          <Route path="/patients/edit" component={EditPatient}/>
          <Route path="/patients/delete" exact component={DeletePatient}/>
          <Route path="/patients/list" exact component={PatientList}/>
            </div>  
          </Content>
          
        </Layout>
      </Layout>

     
      </React.StrictMode>

)
  }

}

export default AuthGuard(PatientHome);