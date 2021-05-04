import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../index.css';
import 'antd/dist/antd.css';
import { Layout, Button } from 'antd';

const { Header, Content, Sider } = Layout;

export default class Home extends Component {
render() {
    return (



        <div>
            <Link to="/patients">
            <Button type="primary">Receptionist Panel</Button>
            </Link>
            <br/><br/>
            <Link to="/doctors">
            <Button type="primary">Doctors Panel</Button>
            </Link>

        </div>
          




    )
}
}
