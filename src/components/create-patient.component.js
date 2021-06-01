import React, { Component } from "react";
import { Form, Input, Button, Radio, DatePicker, Select } from "antd";
import {
   UserOutlined,
   PhoneOutlined,
   MailOutlined,
   IdcardOutlined,
   FieldNumberOutlined,
   InfoCircleOutlined,
   FieldTimeOutlined,
} from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
import locale from "antd/es/date-picker/locale/fr_FR";
import { AuthGuard } from './authGuard';

const { Option } = Select;
const { TextArea } = Input;

const layout = {
   labelCol: {
      span: 3,
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

const dateFormat = "DD/MM/YYYY";

const onFinishFailed = (errorInfo) => {
   console.log("Failed:", errorInfo);
};

function onChange(value) {
   console.log(`selected ${value}`);
 }
 
 function onBlur() {
   console.log('blur');
 }
 
 function onFocus() {
   console.log('focus');
 }
 
 function onSearch(val) {
   console.log('search:', val);
 }
 
class CreatePatient extends Component {
   constructor(props) {
      super(props);

      this.onChangeFirstname = this.onChangeFirstname.bind(this);
      this.onChangeLastname = this.onChangeLastname.bind(this);
      this.onChangeGender = this.onChangeGender.bind(this);
      this.onChangeBloodType = this.onChangeBloodType.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onChangeInsuranceNumber = this.onChangeInsuranceNumber.bind(this);
      this.onChangeAllergies = this.onChangeAllergies.bind(this);
      this.onChangeId = this.onChangeId.bind(this);
      this.onChangeDoctor = this.onChangeDoctor.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
         firstname: "",
         lastname: "",
         gender: "",
         date: new Date(),
         bloodType: "",
         phoneNumber: "",
         allergies: "no allergies known",
         insuranceNumber: "",
         id: "",
         doctors : [],
      };
   }

   onChangeFirstname(e) {
      this.setState({
         firstname: e.target.value,
      });
   }

   onChangeLastname(e) {
      this.setState({
         lastname: e.target.value,
      });
   }
   onChangeGender(e) {
      this.setState({
         gender: e.target.value,
      });
   }

   onChangeDate(e) {
      this.setState({
         date: e.target.value,
      });
   }

   onChangeBloodType(e) {
      this.setState({
         bloodType: e.target.value,
      });
   }

   onChangePhoneNumber(e) {
      this.setState({
         phoneNumber: e.target.value,
      });
   }

   onChangeAllergies(e) {
      this.setState({
         allergies: e.target.value,
      });
   }
   onChangeInsuranceNumber(e) {
      this.setState({
         insuranceNumber: e.target.value,
      });
   }

   onChangeId(e) {
      this.setState({
         id: e.target.value,
      });
   }

   onChangeDoctor(e) {
      this.setState({
         docotr: e.target.value,
      });
   }
   
   async getDoctors() {
      return axios.get("http://localhost:5000/doc").then(res => res.data);
   }

   async setDocs() {
      const doctors = await this.getDoctors();
      this.setState({
         doctors
      });
   }

   componentDidMount() {
      this.setDocs();
   }

   onSubmit(patient) {
      axios
         .post("http://localhost:5000/patients/create", patient)
         .then((res) => console.log(res.data));

      //  window.location = '/patients/list';
   }

   render() {
      return (
         <div>
            <Form
               {...layout}
               name='basic'
               onFinish={this.onSubmit.bind(this)}
               onFinishFailed={onFinishFailed}>
               <Form.Item
                  label='Firstname'
                  name='firstname'
                  tooltip={{
                     title: 'This is a required field',
                     icon: <InfoCircleOutlined />,
                   }}
                  rules={[
                     {
                        message: "Firstname is required",
                        required: true
                     },
                  ]}
                  value={this.state.firstname}
                  onChange={this.onChangeFirstname}>
                  <Input prefix={<UserOutlined />} />
               </Form.Item>

               <Form.Item
                  label='Lastname'
                  name='lastname'
                  tooltip={{
                     title: 'This is a required field',
                     icon: <InfoCircleOutlined />,
                   }}
                  rules={[
                     {
                        message: "Lastname is required",
                        required: true
                     },
                  ]}
                  value={this.state.lastname}
                  onChange={this.onChangeLastname}>
                  <Input prefix={<UserOutlined />} />
               </Form.Item>

               <Form.Item
                  label='Gender'
                  name='gender'
                  tooltip={{
                     title: 'This is a required field',
                     icon: <InfoCircleOutlined />,
                   }}
                  rules={[
                     {
                        message: "Gender is required",
                        required: true
                     },
                  ]}
                  value={this.state.gender}
                  onChange={this.onChangeGender}>
                  <Radio.Group initialValues='a' buttonStyle='solid'>
                     <Radio.Button value='male'>Male</Radio.Button>
                     <Radio.Button value='female'>Female</Radio.Button>
                     <Radio.Button value='other'>Other</Radio.Button>
                  </Radio.Group>
               </Form.Item>

               <Form.Item
                  label='Birth Date'
                  name='date'
                  tooltip={{
                     title: 'This is a required field',
                     icon: <InfoCircleOutlined />,
                   }}
                  rules={[
                     {
                        message: "Date is required",
                        required: true
                     },
                  ]}
                  onChange={this.onChangeDate}>
                  <DatePicker
                     format={dateFormat}
                     locale={locale}
                     style={{ width: "30%" }}
                     defaultValue={moment("2015/01/01", dateFormat)}
                     initialValue={moment("2015/01/01", dateFormat)}
                  />
               </Form.Item>

               <Form.Item
                  label='Blood type'
                  name='bloodType'
                  tooltip={{
                     title: 'This is a required field',
                     icon: <InfoCircleOutlined />,
                   }}
                  rules={[
                     {
                        message: "Blood Type is required",
                        required: true
                     },
                  ]}
                  value={this.state.bloodType}
                  onChange={this.onChangeBloodType}>

                  <Select
                     style={{ width: 95, margin: "0 8px" }}
                     defaultValue='Select'>
                     <Option value='unkown'>unkown</Option>
                     <Option value='A+'>A+</Option>
                     <Option value='A-'>A-</Option>
                     <Option value='B+'>B+</Option>
                     <Option value='B-'>B-</Option>
                     <Option value='O+'>O+</Option>
                     <Option value='O-'>O-</Option>
                     <Option value='AB+'>AB+</Option>
                     <Option value='AB-'>AB-</Option>
                  </Select>
               </Form.Item>

               <Form.Item
                  label='ID Card Number'
                  name='id'
                  tooltip={{
                     title: 'This is a required field',
                     icon: <InfoCircleOutlined />,
                   }}
                  rules={[
                     {
                        message: "ID Card Number is required",
                        required: true
                     },
                  ]}
                  value={this.state.id}
                  onChange={this.onChangeId}>
                  <Input prefix={<IdcardOutlined />} />
               </Form.Item>

               <Form.Item
                  label='Insurance number'
                  name='insuranceNumber'
                  tooltip={{
                     title: 'This is field can be filled later',
                     icon: <FieldTimeOutlined />,
                   }}
                  value={this.state.insuranceNumber}
                  onChange={this.onChangeInsuranceNumber}>
                  <Input prefix={<FieldNumberOutlined />} />
               </Form.Item>

               <Form.Item
                  label='Allergies'
                  name='allergies'
                  tooltip={{
                     title: 'This is a required field',
                     icon: <InfoCircleOutlined />,
                   }}
                  rules={[
                     {
                        message: "Allergies is required",
                        required: true
                     },
                  ]}
                  initialValue={this.state.allergies}
                  onChange={this.onChangeAllergies}>
                  <TextArea rows={4} />
               </Form.Item>

               <Form.Item
                  label='PhoneNumber'
                  name='phoneNumber'
                  tooltip={{
                     title: 'This is a required field',
                     icon: <InfoCircleOutlined />,
                   }}
                  rules={[
                     {
                        message: "PhoneNumber is required",
                        required: true
                     },
                  ]}
                  value={this.state.phoneNumber}
                  onChange={this.onChangePhoneNumber}>
                  <Input prefix={<PhoneOutlined />} />
               </Form.Item>

               <Form.Item
                  label='Email'
                  name='email'
                  tooltip={{
                     title: 'This is field can be filled later',
                     icon: <FieldTimeOutlined />,
                   }}
                  rules={[
                     {
                        type: "email",
                        message: "The input is not valid email!",
                     },
                  ]}>
                  <Input
                     style={{ width: "100%" }}
                     placeholder='Email'
                     prefix={<MailOutlined />}
                  />
               </Form.Item>

               <Form.Item
                 label='Doctor'
                 name='doctor'
                                 value={this.state.doctor}
                                 onChange={this.onChangeDoctor}
               >
               <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }

               >
                    {
                       this.state.doctors.map((doc) =>  {
                          return (
                           <Option value={doc._id}>{doc.firstname + ' ' + doc.lastname}</Option>
                          );
                       })
                    }
                  </Select>

               </Form.Item>

               <Form.Item {...tailLayout}>
                  <Button type='primary' htmlType='submit'>
                     Submit
                  </Button>
               </Form.Item>


            </Form>
         </div>
      );
   }
}

export default AuthGuard(CreatePatient);