import React, { Component } from 'react'
import Table from '../../components/table'
import Form from '../../components/form'
import './index.scss'
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: [
        { header: "姓名" },
        { header: "工作岗位" },
        {header:"操作"}
      ],
      body: [
        {
          name: "豪宗超",
          job:"前端开发工程师"
        },
        {
          name: "豪宗超",
          job:"前端开发工程师"
        }
      ]
    }
  }
  removeTr = (index) => {
    const state = this.state
    this.setState({
      body: state.body.filter((item, ind) => {
        return ind !== index
      })
    })
  }
  handelSubmit = (form) => {
    const state = this.state
    this.setState({
      // body:this.state.body.concat(form)//对象合并
      //解构赋值      
      body:[...this.state.body,form]
    })
  }
  render() {
    return (
      <div className="table-name">
        <Table Head={this.state.head} Body={this.state.body} removeTr={this.removeTr} />
        <Form handelSubmit={this.handelSubmit}/>
      </div>
    )
  }
}
