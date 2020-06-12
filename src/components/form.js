import React, { Component } from 'react'
import store from '../store'
import {addItem} from "../store/actionCreator";
export default class form extends Component {
    constructor(props) {
        super(props);
        this.initValue = {
            name: "",
            job: ""
        }
        this.state = this.initValue;
    }
    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addNewInfo = (e) => {
        this.addItem()
        this.setState(this.initValue)
    }
    addItem() {
        store.dispatch(addItem(this.state));
	}
    render() {
        return (
            <div className="editForm">
                <form action="#">
                    <label>姓名：<input type="text" name="name" id="name" value={this.state.name} onChange={this.handelChange} /></label>
                    <label htmlFor="job">工作岗位：<input type="text" name="job" id="job" value={this.state.job} onChange={this.handelChange} /></label>
                    <input type="button" value="新增" onClick={this.addNewInfo} />
                </form>
            </div>
        )
    }
}
