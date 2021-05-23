import React from "react";
import { Form, Input, Row, Col } from "antd";
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons";

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

         <Form.Item 
          label='MedicalHistory'
          name='medicalHistory'
          tooltip={{
            title: 'This is a required field',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
               message: "Medical history is required",
               required: true
            },
         ]}
          >
            <TextArea placeholder='previous illnesses , complications ...' rows={4} />
         </Form.Item>

         <Form.Item
          label='Signes'
          name='signes'
          tooltip={{
            title: 'This is a required field',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
               message: "Signes is required",
               required: true
            },
         ]}
           >
            <TextArea placeholder='recent signes' rows={4} />
         </Form.Item>

         <Form.Item label='Weight' name='weight'>
            <Input placeholder="patient's weight" prefix={<UserOutlined />} />
         </Form.Item>

         <Form.Item label='Blood Pressure' name='bloodPressure'>
            <Input placeholder="patient's blood pressure" prefix={<UserOutlined />} />
         </Form.Item>

         <Form.Item label='Temperature' name='temperature'>
            <Input placeholder="patient's temperature in C°" prefix={<UserOutlined />} />
         </Form.Item>

         <br />
       
      </>
      
   );
};

export default Consultation;
