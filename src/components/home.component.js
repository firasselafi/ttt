import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import '../index.css';
import 'antd/dist/antd.css';
import { Form, Input, Button, Radio } from 'antd';
import { UserOutlined , LockOutlined,  } from '@ant-design/icons';
import axios from 'axios';
import loginBG from "../img/loginBG.jpg";
import { Hidden } from '@material-ui/core';


const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 12,
      span: 16,
    },
  };
  const tailLayout2 = {

    wrapperCol: {
      offset: 11,
      span: 12,
    },
  };

  const loginStyle = {
    labelCol: {
        span: 10,
      },

    wrapperCol: {
      offset: 10,
      span: 6,
    },
  };



export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('token'),
            type: null,
        };
    }

    onRadioButtonChange(e) {
        this.setState({
            type: e.target.value
        });
    }

    async onFinish(values) {
        try {
            if (!this.state.type) {
                throw new Error();
            }
            
            values.type = this.state.type;
            const res = await axios.post('http://localhost:5000/auth/login', values)
            localStorage.setItem('token', res.data.token);
            this.setState({
                token: res.data.token
            });
        } catch (e) {
            console.log(e);
            alert('Invalid login !');
        }
    }

    render() {
        return (
            this.state.token === null || this.state.type === null ?
        ( 
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish.bind(this)}
                // STYYYYYYYYLE !!!!
                style={{
                    backgroundImage: `url(${loginBG})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    paddingTop: 280,
                    paddingBottom: 280,
                    
                  }}    
                >
                    <br/>
                <Form.Item
                    
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                    {...loginStyle}
                   
                >
                    <Input  placeholder="Username" prefix={<UserOutlined />}/>
                </Form.Item>

                <Form.Item
                   
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    {...loginStyle}
                >
                    <Input.Password placeholder="Password" prefix={<LockOutlined /> }/>
                </Form.Item>

                <Form.Item {...tailLayout2}>
                    <Radio.Group  onChange={this.onRadioButtonChange.bind(this)} defaultValue="a">
                        <Radio.Button value="doctors">Doctor</Radio.Button>
                        <Radio.Button value="" disabled>Patient</Radio.Button>
                        <Radio.Button value="patients">Assistance</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button 
                        
                        htmlType="submit"
                        style={{
                            background: '#6fd9cd',  
                            color: 'white',
                            width: '12%'
                        }}

                    >
                    Log in
                    </Button>
                </Form.Item>
                

                </Form>

            )
            :
            (
                <Redirect to={`/${this.state.type}`}></Redirect>
            )
        )
    }
}