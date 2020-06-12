import React, { Component } from 'react'
import Table from '../../components/table'
import Form from '../../components/form'
import './index.scss'
import store from "../../store/index";
import {deleteItem} from "../../store/actionCreator";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: [
        { header: "姓名" },
        { header: "工作岗位" },
        { header: "操作" }
      ],
      body: store.getState().jobList
    }
    store.subscribe(() => this.changeStore()) //监听store数据的变化
  }
  removeTr = (index) => {
    this.deleteItem(index)
  }
  handelSubmit = (form) => {
    // const state = this.state

    this.setState({
      // body:this.state.body.concat(form)//对象合并
      //解构赋值 

      body: [...this.state.body, form]

    })
  }
  changeStore = () => {
    // console.log(store.getState().jobList)
    this.setState({
      body: store.getState().jobList
    })
  }
  deleteItem(index) {
    // console.log(index)
    store.dispatch(deleteItem(index));
    console.log(store.getState().jobList);
    
}

  render() {
    return (
      <div className="table-name">
        <Table Head={this.state.head} Body={this.state.body} removeTr={this.removeTr} />
        <Form handelSubmit={this.handelSubmit} />
      </div>
    )
  }
}
