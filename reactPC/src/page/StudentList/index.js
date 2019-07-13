import React, { Component } from 'react'
import { Table } from 'antd';
import axios from 'axios'

export default class index extends Component {
  constructor(params){
    super(params);
    this.state = {
      dataSource:[]
    }
  }
  componentWillMount(){
    axios.get('https://easy-mock.com/mock/5cea36ce8347da71af1d4b52/test/test')
    .then((res)=>{
      console.log(res.data.data.projects);
      this.setState({
        dataSource:res.data.data.projects
      })
    })
  }
  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '学号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '学校',
        dataIndex: 'school',
        key: 'school',
      }
    ];
    return (
      <div>
        <div className='middle'>
          <Table className='list-table' columns={columns} dataSource={this.state.dataSource} pagination={{ pageSize: 10 }} scroll={{ y: 400 }} />
        </div>
      </div>
    )
  }
}
