import React from 'react'

import { Input, Space, Switch , Form, InputNumber} from 'antd';
import { UserOutlined } from "@ant-design/icons";


const Certificate = () => {
    const inputRef = React.useRef(null);
    const [input, setInput] = React.useState(false);
    const sharedProps = {
      style: {
        width: '100%',
      },
      defaultValue: 'Ant Design love you!',
      ref: inputRef,
    };

    return (
        
        <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Space wrap>
      
        <Switch
          checked={input}
          checkedChildren="remove certificate"
          unCheckedChildren="add certificate"
          onChange={() => {
            setInput(!input);
          }}
        />
      </Space>
      
      <br />
      {!input ? <h1>no certificate</h1> :
      <>
             <Form.Item 
              label='Description'
              name='certificateDescription'
              rules={[
                {
                   message: "Description is required",
                   required: true
                },
             ]}
               >
                <Input.TextArea  placeholder='description'/>
             </Form.Item>

            <Form.Item
             label='Number of days'
             name='certificateNbrDays'
             rules={[
              {
                 message: "Number of days is required",
                 required: true
              },
           ]}
             >
                <InputNumber min={1} max={30} placeholder='0'/>
            </Form.Item>

        </>
        }

    </Space>

    )
}

export default Certificate
