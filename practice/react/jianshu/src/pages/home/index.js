import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import licaiImage from '../../statics/licai.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLink: licaiImage
    }
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="left-image" src={this.state.imageLink} alt="tupian" />
        </HomeLeft>
        <HomeRight>right</HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;
