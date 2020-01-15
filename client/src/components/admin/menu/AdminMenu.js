import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AdminMenuActionCreators from '../../../actions/adminMenu';
import Header from '../../utilcomponent/Header';
import MenuTable from './AdminMenuTable';
import Nav from '../../utilcomponent/AdminBottomNav';
import {MealContentDiv} from '../../usermenu/stlye';
import {OrderItemDiv} from '../../userorder/UserOrder';
import homeIcon from '../../../assets/img/icons/home.png';


class AdminMenu extends Component {

    static propTypes = {
      adMenu: PropTypes.array.isRequired,
    };
  
    componentDidMount() {
      this.props.getMealsAsMenu();
    }

    getUser = () => {
      const user = localStorage.getItem('currentUser');
      return user;
    }

    render() { 
  
      const { adMenu } = this.props;
  
      return (
        <>

        <Header headerTitle="Menu" />
        <MealContentDiv>     
        { 
          adMenu.map((item, index) =>  
            <OrderItemDiv>
              <MenuTable
                key={index}
                id = {item._id} 
                name = {item.name}
                price={item.price}
                isPosted={ item.isPosted || false}
                postItem = {this.props.postMeal}
                // removeItem = {this.props.removeMealFromMenu}
              />
            </OrderItemDiv>  
        )
        }
        </MealContentDiv>    
           
        <Nav username =  { this.getUser() } firstIcon={homeIcon} firstIconalt="home" firstIconLink="#" theMenu={ adMenu } clearEvery={ this.props.clearMenu } />
        
        </> 
      )
    }
}
  
  const mapStateToProps = state => (
    {
          adMenu: state.adminMenu
    }
  );

  const mapDispatchToProps = dispatch => (
    {
      postMeal: bindActionCreators(AdminMenuActionCreators.postMeal, dispatch),
      clearMenu: bindActionCreators(AdminMenuActionCreators.clearMenu, dispatch),
      getMealsAsMenu: bindActionCreators(AdminMenuActionCreators.getMealsfromDbAsMenu, dispatch),
      // removeMealFromMenu: bindActionCreators(AdminMenuActionCreators.removeMealFromMenu, dispatch)
    } 
  );
   
  export default connect(mapStateToProps, mapDispatchToProps)(AdminMenu);
