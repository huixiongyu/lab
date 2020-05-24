import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import licaiImage from '../../statics/licai.png';
import List from './component/List';
import { actionCreators } from './store';

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
          <List />
        </HomeLeft>
        <HomeRight>right</HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
		this.props.changeHomeData();
	}
}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
});

export default connect(mapState, mapDispatch)(Home);
