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
    axios.get('https://easy-mock.com/mock/5cea36ce8347da71af1d4b52/test/score')
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
        title: '学号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '成绩',
        dataIndex: 'number',
        key: 'number',
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
