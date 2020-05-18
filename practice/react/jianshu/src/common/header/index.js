import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwtich,
  SearchInfoItem,
  Addition,
  Button
} from './style'

const getSearhList = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>热门搜索
        <SearchInfoSwtich>换一批</SearchInfoSwtich>
        </SearchInfoTitle>
        <div>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </div>
      </SearchInfo>
    )
  } else {
    return null;
  }
}

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className="left active">
            <i className="iconfont">&#xe7e3;</i>
            首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
                ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</i>
            {
              getSearhList(this.props.focused)
            }
          </SearchWrapper>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <Addition>
            <Button className="writting">
            <i className="iconfont">&#xe603;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Header);