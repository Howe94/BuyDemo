import React, { Component } from 'react'
export default class visiableDiv extends Component {
    constructor(props) {
        super(props);
    }
    confirmDialog() {
        var r = alert("注册失败！");
        console.log(r)
        if (r) {
            this.props.changeVisiable(false);
        } else {
            console.log("注册失败")
            this.props.changeVisiable(false);
        }
    }
    dialog() {
        return (
            this.confirmDialog()
        )
    }

    render() {
        return (
            <div>
                {this.dialog()}
                <button onClick={()=>this.props.changeVisiable(false)}>关闭</button>
            </div>
        )
    }
}

