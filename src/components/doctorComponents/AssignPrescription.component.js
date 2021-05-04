import React from "react";
import Ordonnance from "./Ordonnance.component";
import Consultation from "./Consultation.component";
import ButtonSubmit from "./ButtonSubmit.component";

import { Form } from "antd";

const layout = {
   labelCol: {
      span: 2,
   },
   wrapperCol: {
      span: 8,
   },
};

const onFinish = (values) => {
   console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
   console.log("Failed:", errorInfo);
};

// Main
const AssignPrescription = () => {
   return (
      <Form
         {...layout}
         name='basic'
         initialValues={{
            remember: true,
         }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}>
         <Consultation onFinish={onFinish} onFinishFailed={onFinishFailed} />
         <Ordonnance onFinish={onFinish} onFinishFailed={onFinishFailed} />
         <ButtonSubmit />
      </Form>
   );
};

export default AssignPrescription;
