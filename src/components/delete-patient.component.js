import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserDeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 2,
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



  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

export default class CreatePatient extends Component {
    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        


        this.state = {
            id: '',

        }


    }
    


  onChangeId(e) {
    this.setState({
        id: e.target.value
       
    })
  }


    onSubmit(patient) {
      
        axios.delete('http://localhost:5000/patients/delete/'+patient.id, patient)
         .then(res => console.log(res.data), alert("Patient deleted!"))
        
        

       // window.location = '/';
    }

    render() {
        return(
          <div>
            
          <Form
          {...layout}
          name="basic"
          onFinish={this.onSubmit.bind(this)}
          onFinishFailed={onFinishFailed}
          
          
        >
             <Form.Item
            label="ID"
            name="id"
            value={this.state.id}
            onChange={this.onChangeId}
          >
            <Input prefix={<UserDeleteOutlined />}/>
          </Form.Item>
    
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" danger>
              Delete
            </Button>
          </Form.Item>

        
    
        </Form>
        </div>
        )
    }
}
