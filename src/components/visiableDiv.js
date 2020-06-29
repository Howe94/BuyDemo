import React, { Component } from 'react'
export default class visiableDiv extends Component {
    constructor(props) {
        super(props);
    }
    confirmDialog() {
       var r = window.confirm("注册失败！");
        if (r) {
            this.props.changeVisiable(false);
        } else {
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
                {/* <button onClick={()=>this.props.changeVisiable(false)}>关闭</button> */}
            </div>
        )
    }
}

