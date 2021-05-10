import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";



export class Ordonnance extends Component {
 
   render() {
      return (
<>

         <Form.Item
            label='Drug name'
            name={'drugname' + this.props.index}
            rules={[
               {
                  message: "Please enter the drug name",
               },
            ]}>
            <Input placeholder='drug name' prefix={<UserOutlined />} />
         </Form.Item>

         <Form.Item
            label='Dose'
            name={'dose' + this.props.index}
            rules={[
               {
                  message: "Please enter the dose",
               },
            ]}>
            <Input placeholder='drug dose' prefix={<UserOutlined />} />
         </Form.Item>

         <Form.Item
            label='Duration'
            name={'duration' + this.props.index }
            rules={[
               {
                  message: "Please enter the duration",
               },
            ]}>
            <Input placeholder='duration' prefix={<UserOutlined />} />
         </Form.Item>


      </>
      )
   }
}

export default Ordonnance
