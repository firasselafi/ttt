import React from "react";
import { Form, Button } from "antd";

const tailLayout = {
   wrapperCol: {
      offset: 9,
      span: 16,
   },
};

const ButtonSubmit = () => {
   return (
      <Form.Item {...tailLayout}>
         <Button type="primary" htmlType="submit">
            Submit
         </Button>
      </Form.Item>
   );
};

export default ButtonSubmit;
