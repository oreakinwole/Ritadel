import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PreOrderActionCreators from '../../actions/preOrder';
import * as OrderActionCreators from '../../actions/order';
import Header from '../usermenu/Header';
import OrderTable from './UserOrderTable';
import Nav from '../userorder/BottomNav';


class UserOrder extends Component {

  static propTypes = {
    preOrder: PropTypes.array.isRequired
  };

  state = {
    orders: []
  }

  componentDidMount() {

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

    const user = sessionStorage.getItem('currentUser');
    return user;

  }

  render() { 

    const { preOrder } = this.props;

    

    const Order =  preOrder.map((item, index) => (

      <OrderTable
            index = {index} 
            name = {item.name}
            price={item.price}
            key={item.name}
      
      />
    ));

      const totalPrice = preOrder.reduce((total, meal) => {
        return total + meal.price;
      }, 0);

    return (
    <div>
      <Header headerTitle="Order" />

      <section className="meal_table">

          <table className="yourorder">
            <tbody>

            { Order }

            <tr>
            <td>Total</td>
            <td>{ totalPrice }</td>
            </tr>

             </tbody>
          </table>

      <button className="btn" onClick = { this.executeOrder }> Confirm </button>
      </section>
        <Nav username =  { this.getUser() } /> 

    </div>
    );
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

