import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import '../index.css';
import 'antd/dist/antd.css';
import { Form, Input, Button, Radio } from 'antd';
import axios from 'axios';



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
      offset: 8,
      span: 16,
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
                >
                    <br/>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>



                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                
                <Form.Item>
                    <Radio.Group  onChange={this.onRadioButtonChange.bind(this)} defaultValue="a">
                        <Radio.Button value="doctors">Doctor</Radio.Button>
                        <Radio.Button value="">Patient</Radio.Button>
                        <Radio.Button value="patients">Assistance</Radio.Button>
                    </Radio.Group>
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