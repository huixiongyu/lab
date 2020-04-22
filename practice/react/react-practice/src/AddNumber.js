import React,  { Component } from 'react';

class AddNumber extends Component {
    static defaultProps = {
        name: '灰熊'
    }
    constructor(props) {
        super(props)
        this.state = {number: 1}
        this.addNum = this.addNum.bind(this)
    }
    addNum() {
        this.setState({
            number: this.state.number + 1
        })
    }
    render() {
        return (
            <div>
                <div>Hello  {this.props.name}</div>
                <p>{this.state.number}</p>
                <button onClick={this.addNum}>增加</button>
            </div>
        )
    }
}

export default AddNumber;