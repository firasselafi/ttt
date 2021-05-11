import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Space, Popconfirm } from 'antd';


const { Column, ColumnGroup } = Table;


export class PatientList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: []
    }
  }

  componentDidMount() {
    this.getPatients();
  }

  getPatients = async() => { 
    await axios.get('http://localhost:5000/patients/get')
   .then(response => 
       this.setState({patients : response.data }) )
   .catch((error) => {
     console.log(error);
   })
}

 onDelete = (patient) =>{
  axios.delete('http://localhost:5000/patients/delete/'+patient.id, patient)
      .then(res => console.log(res.data))

  this.setState({
    patients: this.state.patients.filter((pat) => pat.id !== patient.id)
  });
}

onEdit = () => {
  window.location = '/patients/edit/'
}

    render() {
        return (
            <Table dataSource={this.state.patients} rowKey={obj => obj.id}>
            <ColumnGroup title="Name">
              <Column title="First Name" dataIndex="firstname" key="firstname" />
              <Column title="Last Name" dataIndex="lastname" key="lastname" />
            </ColumnGroup>
            <Column title="ID card" dataIndex="id" key="id" />
            
    
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle" key={record.lastname}>

                    <Button type="primary" onClick={() => window.location = '/patients/edit/'+record.id}>Edit</Button>
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record)}>
                      <Button type="danger" >Delete</Button>
                    </Popconfirm>

                </Space>
              )}
            />
          </Table>
        )
    }
}

export default PatientList





// 



//     console.log(patients)
    
// }


// componentDidMount(){
//     getPatients();
//   }















