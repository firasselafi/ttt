import React, { Component } from 'react';
import Ordonnance from "./Ordonnance.component";
import Consultation from "./Consultation.component";
import ButtonSubmit from "./ButtonSubmit.component";
import AddDrugButton from './AddDrugButton.component'
import { Form } from "antd";
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
const onFinish = (values) => {
   console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
   console.log("Failed:", errorInfo);
};




export class AssignPrescription extends Component {
   constructor(props) {
      super(props)
      this.state = {
         ordonnances : ['ordonnance']
      }
   }
   
   addNewOrdonnance() {
      let nOrdonnances = this.state.ordonnances.slice(0);
      nOrdonnances.push('newOrdonnace');
      this.setState({
         ordonnances: nOrdonnances
      })

   }

   onSubmit(consultation) {
      axios.post("http://localhost:5000/doctors/create", consultation)
         .then((res) => console.log(res.data));

       //window.location = '/patients/list';
   }
   
   render() {
      return (
         <Form
         {...layout}
         name='basic'
         initialValues={{
            remember: true,
         }}
         onFinish={this.onSubmit.bind(this)}
         onFinishFailed={onFinishFailed}>


         <Consultation onFinish={onFinish} onFinishFailed={onFinishFailed} />

         {this.state.ordonnances.map((elm, i) => 
           ( 
           <Form.Item>
           <h3>Prescription {i+1}</h3>
           <Ordonnance  index={i} onFinish={onFinish} onFinishFailed={onFinishFailed} key={i}  />

           </Form.Item>
         ))}
                     <Form.Item>
            <AddDrugButton onAdd={this.addNewOrdonnance.bind(this)}/>
         </Form.Item>

         
         
         <ButtonSubmit />



      </Form>
      )
   }
}

export default AssignPrescription