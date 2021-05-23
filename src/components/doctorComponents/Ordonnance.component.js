import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Form, Input, Button, Space } from "antd";
import { UserOutlined, PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

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

const Ordonnance = () => {

   const onFinish = values => {
     console.log('Received values of form:', values);
   };
 
   return (
   //   <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
       
       <Form.List name="drugs" >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <h1>Prescription {key+1}</h1>
                <Form.Item
                  {...restField}
                  name={[name, 'drugName']}
                  fieldKey={[fieldKey, 'drugName']}
                  rules={[{ required: true, message: 'Missing drug name' }]}
                >
                 
                  <Input  placeholder="drug name" />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'drugDose']}
                  fieldKey={[fieldKey, 'drugDose']}
                  rules={[{ required: true, message: 'Missing drug dose' }]}
                >
                  <Input placeholder="drug dose" />
                </Form.Item>

                
                <Form.Item
                  {...restField}
                  name={[name, 'drugDuration']}
                  fieldKey={[fieldKey, 'drugDuration']}
                  rules={[{ required: true, message: 'Missing drug duration' }]}
                >
                  <Input placeholder="drug duration" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button  type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add drug
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
   //   </Form>
   );
 };
 export default Ordonnance
//  v1

{/* <>

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


</> */}




