import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as UserActionCreators from '../../actions/user';
import * as PreOrderActionCreators from '../../actions/preOrder';
import * as OrderActionCreators from '../../actions/order';
import Header from '../utilcomponent/Header';
import OrderTable from './UserOrderTable';
import Nav from '../../components/utilcomponent/BottomNav';
import backIcon from '../../assets/img/icons/back-arrow.png';
import {MealContentDiv} from '../usermenu/stlye';

export const OrderItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  letter-spacing: .1em;
  margin-top: 20px;

  img{
    width: 4em;
  }
  .add-icon{
    width: 2em;
  }
  .nameprice{
    display: flex;
    flex-direction: column;
  }
  // for Admin menu button
  button{
    outline: 0;
    border: none;
    margin: 20px auto;
    padding 0 15px;
    border-radius: 2px;
    height: 36px;
    font-size: 16px;
    background-color: #450b0b;
    text-align: center;
    letter-spacing: .5px;
    color: #fff;
    cursor: pointer;
    
    &:hover {
        background-color: #741c1c;
    }
}
`;


class UserOrder extends Component {

  static propTypes = {
    preOrder: PropTypes.array.isRequired
  };

  state = {
    orders: []
  }

  async componentDidMount() {
    await this.props.validateToken();
    this.props.getOrders();

    this.setState( { orders: this.props.preOrder });
  }

  executeOrder = () => {
    let arrayOfIDs =this.state.orders.map(item => {
      return item.id;
    });

    this.props.approveOrders(arrayOfIDs);
  }

  getUser = () => {
    const user = localStorage.getItem('currentUser');
    return user;
  }

  render() { 
    const { preOrder } = this.props;
  
      const totalPrice = preOrder.reduce((total, meal) => {
        return total + meal.price;
      }, 0);

    return (
    <>
      <Header headerTitle="Orders" nexticon={true} link= "/ordersuccess" actionFunction = { this.executeOrder } />

      <MealContentDiv> 
          {
              preOrder.map((item, index) => (
                <OrderItemDiv>  
                  <OrderTable
                    index = {index} 
                    name = {item.name}
                    price={item.price}
                    key={item.index}     
                  />
                </OrderItemDiv>
            ))
            }

        <OrderItemDiv> 
          <>
              <div className="nameprice">
                  <h2> Total price </h2>
              </div>

              <h2> {totalPrice} </h2>
          </>
        </OrderItemDiv>

      </MealContentDiv>

      <Nav firstIcon={backIcon} firstIconalt="go back" firstIconLink="/usermenu" trash allOrdersLength= { this.state.orders.length  } username =  { this.getUser() } title="orders"/>
    </>
    )
  }
}

const mapStateToProps = state => (
  {
     preOrder: state.preOrder
  }

);

const mapDispatchToProps = dispatch => {
  return {
    getOrders: bindActionCreators(PreOrderActionCreators.getOrders, dispatch),
    approveOrders: bindActionCreators(OrderActionCreators.forwardOrder, dispatch),
    validateToken: bindActionCreators(UserActionCreators.validateToken, dispatch)
};

}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserOrder);

