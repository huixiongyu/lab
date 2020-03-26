import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
    this.props.history.push('/home/')
    this.state = {
      list: [
        {cid: 123, title: 'Vue基础入门'},
        {cid: 433, title: 'TypeScript从入门到放肆'},
        {cid: 532, title: '爬虫从入门到入狱'},
      ],
    }
  }
  render() {
    return (
      <div>
        <h2>灰熊</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={'/list/' + item.cid}>
                    {item.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default Index;