import React from "react";
import { Form, Input, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

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
      offset: 0,
      span: 8,
   },
};

const Consultation = ({ onFinish, onFinishFailed }) => {
   return (
      <>
         <Form.Item>
            <h3>Consultation</h3>
         </Form.Item>

         <Form.Item label='MedicalHistory' name='medicalHistory'>
            <TextArea rows={4} />
         </Form.Item>

         <Form.Item label='Signes' name='signes'>
            <TextArea rows={4} />
         </Form.Item>

         <Form.Item label='Weight' name='weight'>
            <Input placeholder='default size' prefix={<UserOutlined />} />
         </Form.Item>

         <Form.Item label='Blood Pressure' name='bloodPressure'>
            <Input placeholder='default size' prefix={<UserOutlined />} />
         </Form.Item>

         <Form.Item label='Temperature' name='temperature'>
            <Input placeholder='default size' prefix={<UserOutlined />} />
         </Form.Item>

         <br />
      </>
   );
};

export default Consultation;
