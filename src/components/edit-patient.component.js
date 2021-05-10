import React, { Component } from 'react';
import { Form, Input, Button, Radio, DatePicker, Select } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, IdcardOutlined, FieldNumberOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/fr_FR';
import {BrowserRouter as Router, useParams} from "react-router-dom";


const { Option } = Select;
const { TextArea } = Input;

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

const dateFormat = 'DD/MM/YYYY';


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // getting id by url
  var str = window.location.href;
  var patientIdTable = str.split("/");
  var patientLinkID = patientIdTable[5];


// patientData[0].genders


// getting the patient data
  
//  const onLoadGet = async(patientLinkID) => {
//     await axios.get('http://localhost:5000/patients/getbyid/'+patientLinkID)
//   .then(response => {
//     patientData = response.data;
//     console.log("inside the promise:" , patientData[0])


//   } )
//   .catch( (error) =>  console.log(error))
// }



export default class CreatePatient extends Component {
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
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.loadData = this.loadData.bind(this);



        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            firstname: '',
            lastname: '',
            gender: '',
            date: new Date(),
            bloodType: '',
            phoneNumber: '',
            allergies: 'no allergies known',
            insuranceNumber: '',
            id: '',
            email: '',
            patientData: null,


        }

        

    }
    
    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        })
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
           
        })
    }

    onChangeBloodType(e) {
      console.log(e);
      this.setState({
          bloodType: e
         
      })
  }

  onChangePhoneNumber(e) {
    console.log(e);
    this.setState({
        phoneNumber: e.target.value
       
    })
}

onChangeAllergies(e) {
  this.setState({
      allergies: e.target.value
     
  })
}
  onChangeInsuranceNumber(e) {
    this.setState({
        insuranceNumber: e.target.value
       
    })
  }

  onChangeId(e) {
    this.setState({
        id: e.target.value
       
    })
  }

  onChangeEmail(e) {
    this.setState({
        email: e.target.value
       
    })
  }


    

 componentDidMount() {

  const onLoadGet = (patientLinkID) =>  {
    axios.get('http://localhost:5000/patients/getbyid/'+patientLinkID)
  .then(response => {
    this.setState({
      firstname:  response.data[0].firstname,
      lastname: response.data[0].lastname,
      gender: response.data[0].gender,
      date: response.data[0].date,
      bloodType: response.data[0].bloodType,
      phoneNumber: response.data[0].phoneNumber,
      allergies: response.data[0].allergies,
      insuranceNumber: response.data[0].insuranceNumber,
      email: response.data[0].email,
      id:  response.data[0].firstname,

    })

    console.log("inside the promise:" , this.state.patientData[0])

  } )
  .catch( (error) =>  console.log(error))
}

  onLoadGet(patientLinkID);

  //******************************************************************* */


}
  

    onSubmit(patient) {
      
        axios.patch('http://localhost:5000/patients/edit/'+patientLinkID, patient)
         .then(res => console.log(res.data))
       // window.location = '/';
    }

    

    loadData = () => {

      console.log('this is before' , this.state.firstname);
  
      if(this.state.patientData != null) {
        console.log('patient data is filled !');
       
  
        
            this.setState({

             
  
            })
  
            
      }
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
            <div><Input defaultValue={patientLinkID} prefix={<IdcardOutlined />}/></div>
            
          </Form.Item>
          
          <Form.Item
            label="Firstname"
            name="firstname"

            rules={[
              {
                message: 'Firstname is required',
              },
            ]}
            value={this.state.firstname}
            onChange={this.onChangeFirstname}

          >

            <div>
            <Input value={this.state.firstname} prefix={<UserOutlined />}/> 
            </div>
              {/* <p style={{ color: 'white' }}>
              {this.state.firstname}
              </p> */}
            {/*defaultValue={this.state.firstname} */}
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="lastname"

            rules={[
              {
                message: 'Lastname is required',
              },
            ]}
            value={this.state.lastname}
            onChange={this.onChangeLastname}
          >
            <div><Input value={this.state.lastname} prefix={<UserOutlined />}/></div>
            
          </Form.Item>
    
            <Form.Item
                label="Gender"
                name="gender"
                value={this.state.gender}
                onChange={this.onChangeGender}
            >
              <div>
                <Radio.Group value={this.state.gender} buttonStyle="solid">
                <Radio.Button value="male">Male</Radio.Button>
                <Radio.Button value="female">Female</Radio.Button>
                <Radio.Button value="other">Other</Radio.Button>
                </Radio.Group>
                </div>
            </Form.Item>
    
            <Form.Item
              label="Birth Date"
              name="date"
              onChange={this.onChangeDate}

            >   
            
                  <DatePicker
                  format={dateFormat}
                  locale={locale}
                  style={{ width: '30%' }}
                  value={this.state.date}
                  defaultValue={moment("2015/01/01", dateFormat)}
                  
                  />
               
            </Form.Item>

            <Form.Item
              label="Blood type"
              
              value={this.state.bloodType}
             
            >
              
                <Select

                  style={{ width: 80, margin: '0 8px' }}
                  
                  value={this.state.bloodType}
                  name="bloodType"
                  onChange={this.onChangeBloodType.bind(this)}
                 >
                  <Option value="A+">A+</Option>
                  <Option value="A-">A-</Option>
                  <Option value="B+">B+</Option>
                  <Option value="B-">B-</Option>
                  <Option value="O+">O+</Option>
                  <Option value="O-">O-</Option>
                  <Option value="AB+">AB+</Option>
                  <Option value="AB-">AB-</Option>
                </Select>
               
          </Form.Item>

         

          <Form.Item
            label="Insurance number"
            name="insuranceNumber"
            value={this.state.insuranceNumber}
            onChange={this.onChangeInsuranceNumber}
          >
            <div><Input value={this.state.insuranceNumber} prefix={<FieldNumberOutlined />}/></div>
            
          </Form.Item>


          <Form.Item
            label="Allergies"
            name="allergies"
            initialValue={this.state.allergies}
            onChange={this.onChangeAllergies}
          >
            <div><TextArea value={this.state.allergies}  defaultValue="no allergies known" rows={4} /></div>
            
          </Form.Item>




            <Form.Item
            label="PhoneNumber"
            name="phoneNumber"
            rules={[
              {
                message: 'Lastname is required',
              },
              
            ]}
            value={this.state.phoneNumber}
            onChange={this.onChangePhoneNumber}
            >
    
            <div><Input value={this.state.phoneNumber} prefix={<PhoneOutlined />}/></div>
            
             </Form.Item>
    
    
             <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid email!",
              },
            ]}
          >
            <div>
            <Input
              style={{ width: "100%" }}
              placeholder="Email"
              prefix={<MailOutlined />}
              value={this.state.email}
            />
            </div>
            
             </Form.Item>
    
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit 
            </Button>

            <Button type="primary" onClick={ () => this.loadData() }>
              clg 
            </Button>
            
          </Form.Item>

        
    
        </Form>
        </div>
        )
    }
}
