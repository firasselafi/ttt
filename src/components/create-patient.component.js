import React, { Component } from 'react';
import { Form, Input, Button, Radio, DatePicker, } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';


const layout = {
  labelCol: {
    span: 8,
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

const dateFormat = 'DD/MM/YYYY';


const onFinish = (values) => {
    console.log('From component .js Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

export default class CreatePatient extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            gender: '',
            date: new Date(),


        }


    }
    
    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        })
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
           
        })
    }

    onSubmit(patient) {
      
        axios.post('http://localhost:5000/patients/create', patient)
         .then(res => console.log(res.data));

       // window.location = '/';
    }

    render() {
        return(
          <Form
          {...layout}
          name="basic"
          onFinish={this.onSubmit.bind(this)}
          onFinishFailed={onFinishFailed}
          
        >
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              {
                message: 'Firstname is required',
              },
            ]}
            value={this.state.firstname}
            onChange={this.onChangeFirstname}
          >
            <Input prefix={<UserOutlined />}/>
          </Form.Item>
          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[
              {
                message: 'Lastname is required',
              },
            ]}
            value={this.state.lastname}
            onChange={this.onChangeLastname}
          >
            <Input prefix={<UserOutlined />}/>
          </Form.Item>
    
            <Form.Item
                label="Gender"
                name="gender"
                value={this.state.gender}
                onChange={this.onChangeGender}
            >
                <Radio.Group initialValues="a" buttonStyle="solid">
                <Radio.Button value="male">Male</Radio.Button>
                <Radio.Button value="female">Female</Radio.Button>
                <Radio.Button value="other">Other</Radio.Button>
                </Radio.Group>
            </Form.Item>
    
            <Form.Item
              label="Birth Date"
              name="date"
              onChange={this.onChangeDate}

            >
                  <DatePicker
                  format={dateFormat}
                  style={{ width: '30%' }}
                  defaultValue={moment('2015/01/01', dateFormat)}
                  />

            </Form.Item>
          
    
            <Form.Item
            label="PhoneNumber"
            name="phonenumber"
            rules={[
              {
                message: 'Lastname is required',
              },
            ]}
            >
    
            <Input prefix={<PhoneOutlined />}/>
            
             </Form.Item>
    
    
             <Form.Item
            label="Email"
            name="email"
            >
    
            <Input prefix={<MailOutlined />}/>
            
             </Form.Item>
    
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit 
            </Button>
          </Form.Item>
    
    
        </Form>
        )
    }
}
