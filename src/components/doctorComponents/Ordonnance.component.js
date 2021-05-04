import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const layout = {
   labelCol: {
      span: 2,
   },
   wrapperCol: {
      span: 8,
   },
};

const tailLayout = {
   wrapperCol: {
      offset: 9,
      span: 16,
   },
};

const Ordonnance = ({ onFinish, onFinishFailed }) => {
   return (
      <>
         <Form.Item>
            <h3>Prescription</h3>
         </Form.Item>
         <Form.Item
            label='Drug name'
            name='drugname'
            rules={[
               {
                  message: "Please enter the drug name",
               },
            ]}>
            <Input placeholder='drug name' prefix={<UserOutlined />} />
         </Form.Item>

         <Form.Item
            label='Dose'
            name='dose'
            rules={[
               {
                  message: "Please enter the dose",
               },
            ]}>
            <Input placeholder='drug dose' prefix={<UserOutlined />} />
         </Form.Item>

         <Form.Item
            label='Duration'
            name='duration'
            rules={[
               {
                  message: "Please enter the duration",
               },
            ]}>
            <Input placeholder='duration' prefix={<UserOutlined />} />
         </Form.Item>

         <Form.Item>
            <Button type='primary' htmlType='submit'>
               Add a drug
            </Button>
         </Form.Item>
      </>
   );
};

export default Ordonnance;
