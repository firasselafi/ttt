import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import { Table, Button, Space, Popconfirm, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
const { Column, ColumnGroup } = Table;

export class Appointments extends Component {
  constructor(props){
    super(props);
    this.state = {
      patients: [],
    }
  }
  componentDidMount() {
    this.getPatients();
  }

  getPatients = async(id) => { 
    await axios.get(`http://localhost:5000/doc/patients` , {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
   .then(response => {
     this.setState({patients : response.data.patients });
     console.log(response.data);
    })
   .catch((error) => {
     console.log(error);
   });

  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <Table dataSource={this.state.patients} rowKey={obj => obj.id}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstname" key="firstname" {...this.getColumnSearchProps('firstname')} />
        <Column title="Last Name" dataIndex="lastname" key="lastname" />
      </ColumnGroup>
      <Column title="ID card" dataIndex="id" key="id" {...this.getColumnSearchProps('id')} />
      

      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle" key={record.lastname}>

              <Button type="primary" onClick={() => window.location = '/doctors/prescriptionsAssign/'+record.id}>Assign a prescription</Button>
        

          </Space>
        )}
      />
    </Table>
    )
  }
}

export default Appointments;