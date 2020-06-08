import React, { Component } from 'react'
function TableHead(props) {
    const myHead = props.Head.map((item, index) => {
        return <th key={index}>{item.header}</th>
    })
    return (
        <thead>
            <tr>
                {myHead}
            </tr>
        </thead>
    )
}
function TableBody(props) {
    const myBody = props.Body.map((item, index) => {
        return <tr key={index}>
            <td>{item.name}</td>
            <td>{item.job}</td>
            <td>
                <button onClick={() => props.removeTr(index)}>Delete</button>
            </td>
        </tr>

    })
    return (
        <tbody>
            {myBody}
        </tbody>
    )
}

export default class table extends Component {
    
    render() {
        return (
            <table>
                <TableHead Head={this.props.Head} />
                <TableBody Body={this.props.Body} removeTr={this.props.removeTr}/>
            </table>
        )
    }
}
