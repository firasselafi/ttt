import React, { Component } from 'react';
import Ordonnance from "./Ordonnance.component";
import Consultation from "./Consultation.component";
import ButtonSubmit from "./ButtonSubmit.component";
import AddDrugButton from './AddDrugButton.component'
import Certification from './Certification.component'
import { Form, Input, Button, Space } from "antd";
import axios from "axios";
import { Typography } from 'antd';

const { Title } = Typography;


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



const onFinish = values => {
   console.log('Received values of form:', values);
 };

const onFinishFailed = (errorInfo) => {
   console.log("Failed:", errorInfo);
};





export class AssignPrescription extends Component {
   constructor(props) {
      super(props)
      this.state = {
         ordonnances : [],
         name: null,
      }
   }
   
   componentDidMount() {
      this.getName();
   }

   getName() {
      const index = window.location.href.lastIndexOf('/') + 1;
      if (window.location.href.length <= index) {
         return;
      }

      const id = window.location.href.slice(index);
      console.log(id);
      axios.get('http://localhost:5000/patients/getbyid/' + id, {
         headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
         }
      }).then(res => {
         if (!res.data.length) {
            return;
         }
         const  { firstname, lastname } = res.data[0];
         this.setState({
            name: firstname + ' ' + lastname
         });
      })
      .catch((err) => console.log(err));
   }

   addNewOrdonnance() {
      let nOrdonnances = this.state.ordonnances.slice(0);
      this.setState({
         ordonnances: nOrdonnances
      })
      console.log();
   
   }

   onSubmit(consultation) {
      consultation.patientId = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);
      console.log(consultation);
      const token =localStorage.getItem('token');
      axios.post("http://localhost:5000/doctors/create",consultation, {
         headers: {
            authorization: 'Bearer ' + token
         }
      })
         .then((res) => console.log(res.data)
          
          );
            }
   
   render() {
      return (

        <>

      <Title level={2}>{this.state.name || '' }</Title>   

         <Form
         
         name='basic'
         initialValues={{
            remember: true,
         }}
         onFinish={this.onSubmit.bind(this)}
         onFinishFailed={onFinishFailed}>

         
         <Consultation onFinish={onFinish} onFinishFailed={onFinishFailed} />
         <Ordonnance/>
         <Certification />
     
         
         {/* {this.state.ordonnances.map((elm, i) => 
           ( 
           <Form.Item>
           <h3>Prescription {i+1}</h3>
           <Ordonnance  index={i+1} onFinish={onFinish} onFinishFailed={onFinishFailed} key={i+1}  />

           </Form.Item>
         ))
         
         } */}
            {/* <Form.Item>
            <AddDrugButton onAdd={this.addNewOrdonnance.bind(this)}/>
         </Form.Item> */}

         <ButtonSubmit/>



      </Form>
      </>
      )
   }
}

export default AssignPrescription