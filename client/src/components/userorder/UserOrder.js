import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as PreOrderActionCreators from '../../actions/preOrder';
import * as OrderActionCreators from '../../actions/order';
import Header from '../utilcomponent/Header';
import OrderTable from './UserOrderTable';
import Nav from '../../components/utilcomponent/BottomNav';
import backIcon from '../../assets/img/icons/back-arrow.png';

export const OrderContentDiv = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 20px;
  width: 80%;
`;

export const OrderItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  color: #fff;
  letter-spacing: .1em;

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
`;


class UserOrder extends Component {

  static propTypes = {
    preOrder: PropTypes.array.isRequired
  };

  state = {
    orders: []
  }

  /* componentDidMount() {

   this.props.getOrders();

   this.setState( { orders: this.props.preOrder });

  } */

  executeOrder = () => {
    let arrayOfIDs =this.state.orders.map(item => {
      return item.id;
    });

    this.props.approveOrders(arrayOfIDs);
  }

  getUser = () => {

    const user = sessionStorage.getItem('currentUser');
    return user;

  }

  render() { 
    const { preOrder } = this.props;
  
      const totalPrice = preOrder.reduce((total, meal) => {
        return total + meal.price;
      }, 0);

    return (
    <>
      <Header headerTitle="Orders" nexticon={true} link= "#" actionFunction = { this.executeOrder } />

      <OrderContentDiv>

          <OrderItemDiv>
            {/* {
              preOrder.map((item, index) => (
              <OrderTable
                index = {index} 
                name = {item.name}
                price={item.price}
                key={item.name}     
              />
            ))
            } */}

              <div className="nameprice">
                <h2> Jollof & meat </h2>
                <p> remove </p>
              </div>

              <h2> 500 </h2>
            
            
          </OrderItemDiv>

      </OrderContentDiv>

      <Nav firstIcon={backIcon} firstIconalt="go back" allOrdersLength= { this.state.orders.length  } username =  { this.getUser() } title="orders"/>
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
    approveOrders: bindActionCreators(OrderActionCreators.forwardOrder, dispatch)
};

}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserOrder);

