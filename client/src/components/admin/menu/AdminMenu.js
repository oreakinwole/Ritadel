import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AdminMenuActionCreators from '../../../actions/adminMenu';
import { getMenu } from '../../../actions/menu';
import Header from '../../utilcomponent/Header';
import Nav from '../../utilcomponent/AdminBottomNav';
import {MealContentDiv} from '../../usermenu/stlye';
import {OrderItemDiv} from '../../userorder/UserOrder';
import homeIcon from '../../../assets/img/icons/home.png';


class AdminMenu extends Component {

    static propTypes = {
      adMenu: PropTypes.array.isRequired,
      userMenu: PropTypes.array
    };
  
    async componentDidMount() {
      await this.props.getMealsAsMenu();
      await this.props.loadUserMenu();
      this.props.doIsPosted(this.props.userMenu);
      
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
          adMenu.map(item =>  
            <OrderItemDiv key={item._id}>
                <div className="nameprice">
                  <h2> {item.name} </h2>
                  <p> {item.price} </p>
                </div>

                <div> 
                  <button onClick = { item.isPosted ? ()=> {
                  const theObject = this.props.userMenu.find(thing => thing.mealItem._id === item._id);
                  this.props.removeMealFromMenu(theObject._id);

                 } : ()=> this.props.postMeal(item._id) } > 

                 { item.isPosted ? 'Remove' : 'Post' }
                 
                 </button>
                 
                 </div>            
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
          adMenu: state.adminMenu,
          userMenu: state.menu
    }
  );

  const mapDispatchToProps = dispatch => (
    {
      postMeal: bindActionCreators(AdminMenuActionCreators.postMeal, dispatch),
      clearMenu: bindActionCreators(AdminMenuActionCreators.clearMenu, dispatch),
      getMealsAsMenu: bindActionCreators(AdminMenuActionCreators.getMealsfromDbAsMenu, dispatch),
      loadUserMenu: bindActionCreators(getMenu, dispatch),
      doIsPosted: bindActionCreators(AdminMenuActionCreators.doIsPosted, dispatch),
      removeMealFromMenu: bindActionCreators(AdminMenuActionCreators.removeMealFromMenu, dispatch)
    } 
  );
   
  export default connect(mapStateToProps, mapDispatchToProps)(AdminMenu);
