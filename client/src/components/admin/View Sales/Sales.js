import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OrderActionCreators from '../../../actions/order';
import Header from '../../usermenu/Header';
import SaleTile from './SaleTile';


 
class Sales extends Component {

  static propTypes = {
    Orders: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getOrders();
  }

  render() { 

    const { Orders } = this.props;


    const allOrdersFromDb = Orders.map((item, index) => 
  
    <SaleTile
          index = {index} 
          user = { item.byUser }
          name = {item.name}
          price={item.price}
          time= { item.time}
          date = { item.date }
           key={item.name}
    
    />
    );

    
    const totalSales = Orders.reduce((total, item) => {
      return total + item.price;
    }, 0);

    return (
      <div>

      <Header  headerTitle="Sales"/>

      <section className="meal_table">

       {  allOrdersFromDb }
                      
        <h2>TOTAL EARNINGS:{ totalSales }</h2>
        <hr />
        
        
      </section>
        
      </div>
    );
  }
}
   


const mapStateToProps = state => (
  {
     Orders: state.orders
  }

);

const mapDispatchToProps = dispatch => {
  return {
    getOrders: bindActionCreators(OrderActionCreators.getOrders, dispatch)
};

}
 
export default connect(mapStateToProps, mapDispatchToProps)(Sales);