import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../../actions/user';
import * as MenuActionCreators from '../../actions/menu';
import * as PreOrderActionCreators from '../../actions/preOrder';
import Header from '../utilcomponent/Header';
import MenuTable from './UserMenuTable';
import Nav from '../utilcomponent/BottomNav';
import homeIcon from '../../assets/img/icons/home.png';

import { MealContentDiv} from './stlye';
 
class Menu extends Component {

  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  state = {
    orders: [  ]
  }

  // Making a request to the backend  to get the Menu once Componenct Mounts
  async componentDidMount() {
    await this.props.validateToken();
    await this.props.loadMenu();
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
    const user = localStorage.getItem('currentUser');
    return user;
  }

  render() { 

    const { menu } = this.props;

    return (
      <>
        <Header  headerTitle="MENU" nexticon={true} link= "/userorder" actionFunction = { this.sendToOrdersReducer }/>

        <MealContentDiv>

           {
              menu.map((item, index) => (
              <MenuTable
                    id = { item._id }
                    index = {index} 
                    name = {item.mealItem.name}
                    price={item.mealItem.price}
                    url={item.mealItem.imageUrl}
                    key={item.mealItem.name}
                    sendToOrderState = { this.sendToOrderState }      
              />
            ))
            }

        </MealContentDiv>


        <Nav firstIcon={homeIcon} firstIconalt="home" firstIconLink="#" trash={true} allOrdersLength= { this.state.orders.length  } username =  { this.getUser() } title="ITEMS: " />
      </>
    );
  }
}

//this is calling our Menu state in the Index reducer file
const mapStateToProps = ({menu}) => (
  {
    menu
  }
);

// By specifying this as the second argument in our connect function below, dispatch will then be passed through this rather than giving dispatch to our component " Menu "
const mapDispatchToProps = dispatch => (
  {
    loadMenu: bindActionCreators(MenuActionCreators.getMenu, dispatch),
    sendOrders: bindActionCreators(PreOrderActionCreators.sendOrders, dispatch),
    validateToken: bindActionCreators(UserActionCreators.validateToken, dispatch)
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Menu);