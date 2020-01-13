import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as UserActionCreators from '../../../actions/user';
import Header from '../../utilcomponent/Header';
import Nav from '../../utilcomponent/BottomNav';
import homeIcon from '../../../assets/img/icons/home.png';
import { MealContentDiv} from '../../usermenu/stlye';


const OrderContentDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border-radius: 20px;
  p{
    font-size: 3em;
    &:nth-child(2){
      font-size: 1em;
    }
  }
`;

class OrderSuccess extends Component {
  async componentDidMount() {
    await this.props.validateToken();
  }

  render() {
    return (
      <>
        <Header />
  
          <MealContentDiv>
            <OrderContentDiv>
  
              <p>
                Order Received!
              </p>
  
              <p>
                Orders are typically delivered in less than an hour
              </p>
  
            </OrderContentDiv>
            
          </MealContentDiv>
  
        <Nav firstIcon={homeIcon} firstIconalt="home" firstIconLink="/usermenu" username = {localStorage.getItem('currentUser')} />
      </>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    validateToken: bindActionCreators(UserActionCreators.validateToken, dispatch)
  }
);

export default connect(null, mapDispatchToProps)(OrderSuccess);
