import React, { Component } from 'react';
import Ordonnance from "./Ordonnance.component";
import Consultation from "./Consultation.component";
import ButtonSubmit from "./ButtonSubmit.component";
import AddDrugButton from './AddDrugButton.component'
import Certification from './Certification.component'
import { Form, Input, Button, Space } from "antd";
import { UserOutlined, PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import axios from "axios";



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
         ordonnances : ['empty']
      }
   }
   
   addNewOrdonnance() {
      let nOrdonnances = this.state.ordonnances.slice(0);
      nOrdonnances.push(`1`);
      this.setState({
         ordonnances: nOrdonnances
      })
      console.log();
   
   }

   onSubmit(consultation) {
      axios.post("http://localhost:5000/doctors/create", consultation)
         .then((res) => console.log(res.data)
          
          );
         
       //window.location = '/patients/list';
   }
   
   render() {
      return (

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
      )
   }
}

export default AssignPrescription