import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MenuActionCreators from '../../actions/menu';
import * as PreOrderActionCreators from '../../actions/preOrder';
import Header from './Header';
import MenuTable from './UserMenuTable';
import Nav from './BottomNav';
import { Link } from 'react-router-dom';
import jollof from '../../img/jollof.png';
import indomieChicken from '../../img/indc.png';
import yamEgg from '../../img/yamegg.png';
import porridge from '../../img/por.png';
import indomieEgg from '../../img/inde.png';


 
class Menu extends Component {

  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  state = {
    orders: [  ]
  }

  // Making a request to the backend  to get the Menu once Componenct Mounts
  componentDidMount() {

    this.props.loadMenu();
    
  }

  // To send all the orders selected by the user to our current local state
  sendToOrderState = (id, name, price) => {
   this.state.orders.push( { id: id, name: name, price: price });

   // this will make our app to re-render itself. By doing this the Counter which reads the total number of items chosen will update the count.
   this.forceUpdate();
  }

  // After Clicking the next button. This will forward all the orders in our local state to our Preorder reducer with will be called by the next page to show all the orders just made by the user on the next page.
  sendToOrdersReducer = () => {
    this.props.sendOrders(this.state.orders);
  }

  // To get the current user set during Login
  getUser = () => {

    const user = sessionStorage.getItem('currentUser');
    return user;

  }

  render() { 

    const { menu } = this.props;

    const Menu =  menu.map((item, index) => (

      <MenuTable
            id = { item._id }
            index = {index} 
            name = {item.mealItem.name}
            price={item.mealItem.price}
            key={item.mealItem.name}
            sendToOrderState = { this.sendToOrderState }      
      />
    ));

    return (
      <div>
          <Header  headerTitle="Menu"/>

      <section className="meal_table">
        <div className="animated bounceIn slower">
          <img className="user_menu_foodimage" src={jollof} alt="jollof" />
          <img className="user_menu_foodimage" src={indomieChicken}  alt="indomieChicken" />
          <img className="user_menu_foodimage" src={yamEgg}  alt="yamEgg" />
          <img className="user_menu_foodimage" src={porridge} alt="porridge" />
          <img className="user_menu_foodimage" src={indomieEgg}  alt="indomieEgg" />
        </div>
          <table className="usm_maintable">

         
          <tbody>
         

          { Menu }

          </tbody>

          </table>
          
       </section>

        <Link to="/userorder" className="btn" onClick = { this.sendToOrdersReducer }> Next </Link>

        <Nav allOrdersLength= { this.state.orders.length  } username =  { this.getUser() } />
       </div>
    );
  }
}

//this is calling our Menu state in the Index reducer file

const mapStateToProps = state => (
  {
        menu: state.menu
  }

);

// By specifying this as the second argument in our connect function below, dispatch will then be passed through this rather than giving dispatch to our component " Menu "
const mapDispatchToProps = dispatch => {
  return {
    loadMenu: bindActionCreators(MenuActionCreators.getMenu, dispatch),
    sendOrders: bindActionCreators(PreOrderActionCreators.sendOrders, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Menu);