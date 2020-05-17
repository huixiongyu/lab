import React,  { Component } from 'react';

class AddNumber extends Component {
    static defaultProps = {
        name: '灰熊'
    }
    constructor(props) {
        super(props)
        console.log('1.构造函数')
        this.state = {number: 1}
        console.log('2.设置状态机')
        this.addNum = this.addNum.bind(this)
    }
    addNum() {
        this.setState({
            number: this.state.number + 1
        })
    }
    componentWillMount() {
      console.log('3. componentWillMount 渲染前调用');
    }
    render() {
        console.log('4. 组件进行渲染了呢')
        return (
            <div>
                <div>Hello  {this.props.name}</div>
                <p>{this.state.number}</p>
                <button onClick={this.addNum}>增加</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('5. 组件渲染完了呢')
    }
}

export default AddNumber;